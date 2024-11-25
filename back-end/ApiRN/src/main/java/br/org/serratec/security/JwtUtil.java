package br.org.serratec.security;

import java.util.Date;
import java.util.Optional;

import javax.crypto.SecretKey;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import br.org.serratec.domain.Usuario;
import br.org.serratec.repository.UsuarioRepository;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;

@Component
public class JwtUtil {

    @Value("${auth-jwt-secret}")
    private String jwtSecret;

    @Value("${auth-jwt-expiration-miliseg}")
    private Long jwtExpirationMiliseg;

	@Autowired
    private UsuarioRepository usuarioRepository;

    public String generateToken(String username) {
		Optional<Usuario> userOpt = usuarioRepository.findByEmail(username);
		if (userOpt.isEmpty()) {
			return null;
		}
		Usuario user = userOpt.get();
        SecretKey secretKeySpec = Keys.hmacShaKeyFor(jwtSecret.getBytes());
        return Jwts.builder().setSubject(username)
                .claim("id", user.getId())
                .setExpiration(new Date(System.currentTimeMillis() + this.jwtExpirationMiliseg)).signWith(secretKeySpec)
                .compact();
    }

    public boolean isValidToken(String token) {
        Claims claims = getClaims(token);
        if (claims != null) {
            String username = claims.getSubject();
            Date expirationDate = claims.getExpiration();
            Date now = new Date(System.currentTimeMillis());
            if (username != null && expirationDate != null && now.before(expirationDate)) {
                return true;
            }
        }
        return false;
    }

    public String getUserName(String token) {
        Claims claims = getClaims(token);
        if (claims != null) {
            return claims.getSubject();
        }
        return null;
    }

    public Claims getClaims(String token) {
        return Jwts.parserBuilder().setSigningKey(jwtSecret.getBytes()).build().parseClaimsJws(token).getBody();
    }

}
