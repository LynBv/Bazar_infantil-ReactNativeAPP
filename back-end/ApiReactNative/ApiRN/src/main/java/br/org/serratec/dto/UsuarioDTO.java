package br.org.serratec.dto;

import java.util.Base64;

import br.org.serratec.domain.Avatar;
import br.org.serratec.domain.Usuario;

public class UsuarioDTO {
	private Long id;
	private String nome;
	private String email;
	private String base64;

	public UsuarioDTO() {

	}

	public UsuarioDTO(Long id, String nome, String sobrenome, String email) {
		super();
		this.id = id;
		this.nome = nome;
		this.email = email;
	}

	public UsuarioDTO(Usuario usuario) {
		this.id = usuario.getId();
		this.nome = usuario.getNome();
		this.email = usuario.getEmail();
		this.base64 = imagem(usuario.getAvatar());
	}

	public String getBase64() {
		return base64;
	}

	public void setBase64(String base64) {
		this.base64 = base64;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	private String imagem(Avatar avatar) {
		if (avatar != null && avatar.getDados() != null) {
			return Base64.getEncoder().encodeToString(avatar.getDados());
		}
		return null;
	}

}
