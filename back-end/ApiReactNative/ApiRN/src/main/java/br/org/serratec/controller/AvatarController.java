package br.org.serratec.controller;
import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import br.org.serratec.domain.Avatar;
import br.org.serratec.service.AvatarService;

@RestController
@RequestMapping("/avatar")
public class AvatarController {
	
	@Autowired
	private AvatarService avatarService;

	@GetMapping
	public ResponseEntity<List<Avatar>> listar(){
		return ResponseEntity.ok(avatarService.listar());
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Avatar> buscar(@PathVariable Long id){
		if (avatarService.buscar(id).isEmpty()) {
			return ResponseEntity.notFound().build();
		}
		return ResponseEntity.ok(avatarService.buscar(id).get());
	}
	
	@PostMapping(consumes = {"multipart/form-data"})
	public ResponseEntity<Avatar> inserir(@RequestParam MultipartFile file){
		Avatar avatar = avatarService.inserir(file);
		URI uri = ServletUriComponentsBuilder
				.fromCurrentRequest()
				.path("/{id}")
				.buildAndExpand(avatar.getId())
				.toUri();
		return ResponseEntity.created(uri).body(avatar);
	}
	
	@PutMapping("/{id}")
	public ResponseEntity<Avatar> atualizar(@PathVariable Long id, @RequestParam MultipartFile file){
		if (avatarService.buscar(id).isEmpty()) {
			return ResponseEntity.notFound().build();
		}
		Avatar avatar = avatarService.atualizar(file, id);
		return ResponseEntity.ok(avatar);
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<Void> deletar(@PathVariable Long id){
		if (avatarService.buscar(id).isEmpty()) {
			return ResponseEntity.notFound().build();
		}
		avatarService.deletar(id);
		return ResponseEntity.noContent().build();
	}
}
