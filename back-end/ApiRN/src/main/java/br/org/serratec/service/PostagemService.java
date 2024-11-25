package br.org.serratec.service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import br.org.serratec.domain.Foto;
import br.org.serratec.domain.Postagem;
import br.org.serratec.dto.PostagemDTO;
import br.org.serratec.dto.PostagemInserirDTO;
import br.org.serratec.repository.PostagemRepository;
import br.org.serratec.repository.UsuarioRepository;

@Service
public class PostagemService {
	
	@Autowired
	private FotoService fotoService;

	@Autowired
	private PostagemRepository postagemRepository;
	
	@Autowired
	private UsuarioService usuarioService;
	
	@Autowired
	private UsuarioRepository usuarioRepository;
	
	public List<PostagemDTO> listar() {
		return postagemRepository.findAll().stream().map(PostagemDTO::new).toList();
	}

	public Optional<Postagem> buscar(Long id) {
		return postagemRepository.findById(id);
	}

	public void deletarPorId(Long id) {
		postagemRepository.deleteById(id);
	}
	
	public List<PostagemDTO> postsPorUsuario(Long id){
		List<PostagemDTO> postagemDTO = new ArrayList<>();
		for (Postagem postagem : usuarioService.buscar(id).get().getPostagens()) {
			postagemDTO.add(new PostagemDTO(postagem));
		}
		return postagemDTO;
	}
	
	public PostagemDTO inserirPost (PostagemInserirDTO postagemInserirDTO) {
		Postagem postagem = new Postagem();
		postagem.setDataCriacao(LocalDate.now());
		postagem.setPreco(postagemInserirDTO.getPreco());
		postagem.setTitulo(postagemInserirDTO.getTitulo());
		postagem.setDescricao(postagemInserirDTO.getDescricao());
		postagem.setCategoriasGenero(postagemInserirDTO.getCategoriasGenero());
		postagem.setCategoriasIdade(postagemInserirDTO.getCategoriaIdade());
		postagem.setUsuario(usuarioRepository.findById(usuarioService.idUsuarioLogado()).get());
		
		postagem = postagemRepository.save(postagem);
		
		postagem.setFoto(converterParaFotos(postagemInserirDTO.getFotos(), postagem.getId()));
		
		return new PostagemDTO(postagemRepository.save(postagem));
	}
	
	public PostagemDTO atualizar(Long id, PostagemInserirDTO postagemInserirDTO) {
		if (postagemRepository.findById(id).isEmpty()) {
			throw new RuntimeException("Essa postaem não existe!");
		}
		if (!postagemRepository.findById(id).get().getUsuario().equals(usuarioService.buscar(usuarioService.idUsuarioLogado()).get())) {
			throw new RuntimeException("Você não pode altera uma postagem e outra pessoa!");
		} 
		Postagem postagem = new Postagem();
		postagem.setId(id);
		postagem.setDataCriacao(LocalDate.now());
		postagem.setFoto(converterParaFotos(postagemInserirDTO.getFotos(), id));
		postagem.setPreco(postagemInserirDTO.getPreco());
		postagem.setTitulo(postagemInserirDTO.getTitulo());
		postagem.setDescricao(postagemInserirDTO.getDescricao());
		postagem.setCategoriasGenero(postagemInserirDTO.getCategoriasGenero());
		postagem.setCategoriasIdade(postagemInserirDTO.getCategoriaIdade());
		postagem.setUsuario(usuarioService.buscar(usuarioService.idUsuarioLogado()).get());
		return new PostagemDTO(postagemRepository.save(postagem));
	}
	
	public void deletar(Long id) {
		postagemRepository.deleteById(id);
	}
	
	private List<Foto> converterParaFotos(List<MultipartFile> files, Long id) {
        List<Foto> fotos = new ArrayList<>();
        for (MultipartFile file : files) {
            try {
                fotos.add(fotoService.inserir(postagemRepository.findById(id).get(), file));
            } catch (Exception e) {
                throw new RuntimeException("Erro ao processar arquivo: " + file.getOriginalFilename(), e);
            }
        }
        return fotos;
    }
}
