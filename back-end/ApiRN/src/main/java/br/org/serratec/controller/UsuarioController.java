package br.org.serratec.controller;

import java.io.IOException;
import java.net.URI;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import br.org.serratec.domain.Usuario;
import br.org.serratec.dto.UsuarioDTO;
import br.org.serratec.dto.UsuarioInserirDTO;
import br.org.serratec.exception.CadastroException;
import br.org.serratec.service.UsuarioService;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/usuarios")
public class UsuarioController {
	
	@Autowired
	private UsuarioService usuarioService;
	
	@GetMapping
	public ResponseEntity<List<UsuarioDTO>> listar() {
		return ResponseEntity.ok(usuarioService.listar());
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<UsuarioDTO> buscar(@PathVariable Long id) {
		Optional<Usuario> usuarioOpt = usuarioService.buscar(id);
		if(usuarioOpt.isPresent()) {
			return ResponseEntity.ok(new UsuarioDTO(usuarioOpt.get()));
		}
		return ResponseEntity.notFound().build();
	}
	
	@PostMapping
	public ResponseEntity<UsuarioDTO> salvar(@Valid @RequestBody UsuarioInserirDTO usuarioInserirDTO) throws CadastroException, IOException {
		UsuarioDTO usuarioDTO = usuarioService.inserir(usuarioInserirDTO);
		URI uri = ServletUriComponentsBuilder
				.fromCurrentRequest()
				.path("/{id}")
				.buildAndExpand(usuarioDTO.getId())
				.toUri();
		return ResponseEntity.created(uri).body(usuarioDTO);
	}
	
	@PutMapping("/{id}")
	public ResponseEntity<UsuarioDTO> atualizar(@PathVariable Long id, @Valid @RequestParam UsuarioInserirDTO usuarioInserirDTO) throws CadastroException, IOException {
		Optional<Usuario> usuarioOpt = usuarioService.buscar(id);
		if (usuarioOpt.isEmpty()) {
			return ResponseEntity.notFound().build();
		}
		UsuarioDTO usuarioDTO = usuarioService.atualizar(id, usuarioInserirDTO);
		usuarioDTO.setId(id);
		return ResponseEntity.ok(usuarioDTO);
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<Void> apagar(@PathVariable Long id) {
		Optional<Usuario> usuarioOpt = usuarioService.buscar(id);
		if (usuarioOpt.isEmpty()) {
			return ResponseEntity.notFound().build();
		}
		usuarioService.deletarPorId(id);
		return ResponseEntity.noContent().build();
	}
}
