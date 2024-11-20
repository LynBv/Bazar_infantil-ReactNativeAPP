package br.org.serratec.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import br.org.serratec.domain.Avatar;
import br.org.serratec.repository.AvatarRepository;

@Service
public class AvatarService {
	
	@Autowired
	private AvatarRepository avatarRepository;

	public List<Avatar> listar(){
		return avatarRepository.findAll();
	}
	
	public Optional<Avatar> buscar(Long id){
		return avatarRepository.findById(id);
	}
	
	public Avatar inserir(MultipartFile file) {
		Avatar avatar = new Avatar();
		try {
			avatar.setNome(file.getOriginalFilename());
			avatar.setTipo(file.getContentType());
			avatar.setDados(file.getBytes());
		} catch (Exception e) {
			throw new RuntimeException("Erro ao processar arquivo: " + file.getOriginalFilename(), e);
		}
		return avatarRepository.save(avatar);
	}
	
	public Avatar atualizar(MultipartFile file, Long id) {
		Avatar avatar = new Avatar();
		try {
			avatar.setId(id);
			avatar.setNome(file.getOriginalFilename());
			avatar.setTipo(file.getContentType());
			avatar.setDados(file.getBytes());
		} catch (Exception e) {
			throw new RuntimeException("Erro ao processar arquivo: " + file.getOriginalFilename(), e);
		}
		return avatarRepository.save(avatar);
	}
	
	public void deletar(Long id) {
		avatarRepository.deleteById(id);
	}
}
