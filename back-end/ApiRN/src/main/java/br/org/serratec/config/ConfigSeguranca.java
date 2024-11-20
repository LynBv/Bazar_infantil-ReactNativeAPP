package br.org.serratec.config;

import org.springframework.beans.factory.annotation.Autowired;


import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;

import br.org.serratec.security.JwtAuthenticationFilter;
import br.org.serratec.security.JwtAuthorizationFilter;
import br.org.serratec.security.JwtUtil;

@Configuration
@EnableWebSecurity
public class ConfigSeguranca {
	
	@Autowired
	private UserDetailsService userDetailsService;
	
	@Autowired
	private JwtUtil jwtUtil;

	@Bean
	SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
		http.csrf(csrf -> csrf.disable())
		.authorizeHttpRequests(authorize -> 
	        authorize
	            .requestMatchers(HttpMethod.POST, "/usuarios").permitAll()
	            .requestMatchers(HttpMethod.POST, "/avatar").permitAll()
	            .requestMatchers(HttpMethod.GET, "/avatar").permitAll()
	            .requestMatchers(HttpMethod.PUT, "/avatar").permitAll()
	            .requestMatchers(HttpMethod.DELETE, "/avatar").permitAll()
	            .requestMatchers(new AntPathRequestMatcher("/h2-console/**")).permitAll()
	            .anyRequest().authenticated()
	    )
	    .httpBasic(Customizer.withDefaults())
	    .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
		 .headers((headers) -> headers.disable());
		
		JwtAuthenticationFilter jwtAuthenticationFilter = 
				new JwtAuthenticationFilter(authenticationManager(http.getSharedObject(AuthenticationConfiguration.class))
						, jwtUtil);
		jwtAuthenticationFilter.setFilterProcessesUrl("/login");
		
		JwtAuthorizationFilter jwtAuthorizationFilter = 
				new JwtAuthorizationFilter(authenticationManager(http.getSharedObject(AuthenticationConfiguration.class)),
						jwtUtil, userDetailsService);
		
		http.addFilter(jwtAuthenticationFilter);
		http.addFilter(jwtAuthorizationFilter);
		
		return http.build();
	}
	
	
	@Bean
	BCryptPasswordEncoder bCryptPasswordEncoder() {
		return new BCryptPasswordEncoder();
	}
	
	@Bean
	AuthenticationManager authenticationManager(AuthenticationConfiguration authenticationConfiguration) 
			throws Exception {
		return authenticationConfiguration.getAuthenticationManager();
	}
}
