package br.org.serratec.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.Lob;
import jakarta.persistence.ManyToOne;
import jakarta.validation.constraints.NotBlank;

@Entity
public class Foto {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Lob
	private byte[] dados;

	@JsonIgnore
	@ManyToOne
	@JoinColumn(name = "id_postagem")
	private Postagem postagem;

	@Column
	@NotBlank
	private String tipo;

	@Column
	@NotBlank
	private String nome;

	public Foto() {
	}

	public Foto(Long id, byte[] dados, Postagem postagem, String tipo, String nome) {
		super();
		this.id = id;
		this.dados = dados;
		this.postagem = postagem;
		this.tipo = tipo;
		this.nome = nome;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public byte[] getDados() {
		return dados;
	}

	public void setDados(byte[] dados) {
		this.dados = dados;
	}

	public String getTipo() {
		return tipo;
	}

	public void setTipo(String tipo) {
		this.tipo = tipo;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public Postagem getPostagem() {
		return postagem;
	}

	public void setPostagem(Postagem postagem) {
		this.postagem = postagem;
	}

}
