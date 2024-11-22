package br.org.serratec.controller;

import java.net.URI;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import br.org.serratec.domain.Postagem;
import br.org.serratec.dto.PostagemDTO;
import br.org.serratec.dto.PostagemInserirDTO;
import br.org.serratec.service.PostagemService;
import jakarta.validation.Valid;


@RestController
@RequestMapping("/postagem")
public class PostagemController {
	
	@Autowired
	private PostagemService postagemService;
	
	@GetMapping
	public ResponseEntity<List<PostagemDTO>> listar(){
		return ResponseEntity.ok(postagemService.listar());
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<PostagemDTO> buscar(@PathVariable Long id){
		Optional<Postagem> postagemOpt = postagemService.buscar(id);
		if (postagemOpt.isEmpty()) {
			return ResponseEntity.notFound().build();
		}
		return ResponseEntity.ok(new PostagemDTO(postagemOpt.get()));
	}

	@GetMapping("/usuario/{id}")
	public ResponseEntity<List<PostagemDTO>> postsPorUsuario(@PathVariable Long id){
		
		return ResponseEntity.ok(postagemService.postsPorUsuario(id));
		
	}
	public String getMethodName(@RequestParam String param) {
		return new String();
	}
	
	@PostMapping(consumes = {"multipart/form-data"})
	public ResponseEntity<PostagemDTO> criar(@Valid @ModelAttribute PostagemInserirDTO postagemInserirDTO){
		PostagemDTO postagemDTO = postagemService.inserirPost(postagemInserirDTO);
		URI uri = ServletUriComponentsBuilder
				.fromCurrentRequest()
				.path("/{id}")
				.buildAndExpand(postagemDTO.getId())
				.toUri();
		return ResponseEntity.created(uri).body(postagemDTO);
	}
	
	@PutMapping("/{id}")
	public ResponseEntity<PostagemDTO> atualizar(@PathVariable Long id, @Valid @RequestBody PostagemInserirDTO postagemInserirDTO){
		Optional<Postagem> usuarioOpt = postagemService.buscar(id);
		if (usuarioOpt.isEmpty()) {
			return ResponseEntity.notFound().build();
		}
		PostagemDTO postagemDTO = postagemService.atualizar(id, postagemInserirDTO);
		postagemDTO.setId(id);
		return ResponseEntity.ok(postagemDTO);
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<Void> deletar(@PathVariable Long id){
		if (postagemService.buscar(id).isEmpty()) {
			return ResponseEntity.notFound().build();
		}
		postagemService.deletar(id);
		return ResponseEntity.noContent().build();
	}
}
