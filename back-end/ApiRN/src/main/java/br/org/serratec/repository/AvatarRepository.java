package br.org.serratec.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.org.serratec.domain.Avatar;

public interface AvatarRepository extends JpaRepository<Avatar, Long>{

}
