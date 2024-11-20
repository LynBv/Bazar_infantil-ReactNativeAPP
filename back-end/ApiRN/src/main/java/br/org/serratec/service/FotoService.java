package br.org.serratec.service;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import br.org.serratec.domain.Foto;
import br.org.serratec.domain.Postagem;
import br.org.serratec.repository.FotoRepository;

@Service
public class FotoService {

	@Autowired
	private FotoRepository fotoRepository;
	
	public List<Foto> listar(){
		return fotoRepository.findAll();
	}
	
	public Optional<Foto> buscar(Long id){
		return fotoRepository.findById(id);
	}

	public Foto inserir(Postagem postagem, MultipartFile file) throws IOException {
		Foto foto = new Foto();

		try {
			foto.setNome(file.getName());
			foto.setTipo(file.getContentType());
			foto.setDados(file.getBytes());
			foto.setPostagem(postagem);
		} catch (IOException e) {
			throw new RuntimeException("Erro ao processar arquivo: " + file.getOriginalFilename(), e);
		}
		return fotoRepository.save(foto);
	}

}
