package br.org.serratec.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.org.serratec.domain.Foto;

public interface FotoRepository extends JpaRepository<Foto, Long>{

}
