package br.org.serratec.service;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import br.org.serratec.domain.Usuario;
import br.org.serratec.dto.UsuarioDTO;
import br.org.serratec.dto.UsuarioInserirDTO;
import br.org.serratec.exception.CadastroException;
import br.org.serratec.repository.UsuarioRepository;

@Service
public class UsuarioService {
	
	@Autowired
	private AvatarService avatarService;

	@Autowired
	private UsuarioRepository usuarioRepository;

	@Autowired
	private BCryptPasswordEncoder encoder;

	public List<UsuarioDTO> listar() {
		return usuarioRepository.findAll().stream().map(UsuarioDTO::new).toList();
	}

	public Optional<Usuario> buscar(Long id) {
		return usuarioRepository.findById(id);
	}

	public void deletarPorId(Long id) {
		usuarioRepository.deleteById(id);
	}

	@Transactional
	public UsuarioDTO inserir(UsuarioInserirDTO usuarioInserirDTO) throws CadastroException, IOException {
		if (!usuarioInserirDTO.getSenha().equals(usuarioInserirDTO.getConfirmaSenha())) {
			throw new CadastroException("As Senhas não iguais");
		}
		if (usuarioRepository.findByEmail(usuarioInserirDTO.getEmail()).isPresent()) {
			throw new CadastroException("O email já existente");
		}

		Usuario usuario = new Usuario();
		usuario.setNome(usuarioInserirDTO.getNome());
		usuario.setEmail(usuarioInserirDTO.getEmail());
		usuario.setSenha(encoder.encode(usuarioInserirDTO.getSenha()));
		usuario.setAvatar(avatarService.buscar(usuarioInserirDTO.getAvatar().getId()).get());

		usuarioRepository.save(usuario);

		return new UsuarioDTO(usuario);

	}

	public UsuarioDTO atualizar(Long id, UsuarioInserirDTO usuarioInserirDTO) {
		if (usuarioRepository.findById(idUsuarioLogado()).get().getId().equals(id)) {
			Usuario usuario = new Usuario();
			usuario.setId(id);
			usuario.setNome(
					usuarioInserirDTO.getNome() == null ? usuarioRepository.findById(idUsuarioLogado()).get().getNome()
							: usuarioInserirDTO.getNome());
			usuario.setEmail(usuarioInserirDTO.getEmail() == null
					? usuarioRepository.findById(idUsuarioLogado()).get().getEmail()
					: usuarioInserirDTO.getEmail());
			usuario.setSenha(usuarioInserirDTO.getSenha() == null
					? usuarioRepository.findById(idUsuarioLogado()).get().getSenha()
					: usuarioInserirDTO.getNome());
			usuario.setAvatar(usuarioInserirDTO.getAvatar() == null
					? usuarioRepository.findById(idUsuarioLogado()).get().getAvatar()
					: avatarService.buscar(usuarioInserirDTO.getAvatar().getId()).get());

			return new UsuarioDTO(usuarioRepository.save(usuario));
		}
		throw new RuntimeException("Você não pode alterar outro usuário!");
	}


	public Long idUsuarioLogado() {
		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
		if (authentication != null && authentication.isAuthenticated()) {
			return usuarioRepository.findByEmail(authentication.getName()).get().getId();
		}
		throw new RuntimeException("Usuario não Autenticado");
	}

}
