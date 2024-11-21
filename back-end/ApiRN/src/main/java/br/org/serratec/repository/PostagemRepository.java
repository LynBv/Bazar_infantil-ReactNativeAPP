package br.org.serratec.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.org.serratec.domain.Postagem;

public interface PostagemRepository extends JpaRepository<Postagem, Long>{
	
}
