import NextLink from 'next/link'
import { Container, Box, Button, Heading, Image, Link, useColorModeValue } from "@chakra-ui/react"
import Head from "next/head"
import { ChevronRightIcon } from '@chakra-ui/icons'
import Layout from '../components/layouts/article'
import Section from "../components/section"
import Paragraph from "../components/paragraph"
import { BioSection, BioYear } from '../components/bio'

const Page = () => {
  return(
    <Layout>
      <Container>
        <Box borderRadius='lg' bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200' )} p={3} mb={6} align="center">
          Hello, I&apos;m a full-stack developer based in Brazil!
        </Box>

        <Box display={{md:'flex'}}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Rodrigo Vieira
            </Heading>
            <p>Digital Craftsman (Web Developer / Designer / UI & UX)</p>
          </Box>
          <Box flexShrink={0} mt={{base: 4, md: 0}} ml={{md: 6}} align="center">
            <Image borderColor="whiteAlpha.800" borderWidth={2} borderStyle="solid" masWidth="100px" display="inline-block" borderRadius="full" src="/images/rodrigo.jpg" alt="Imagem de perfil" />
          </Box>
        </Box>
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Work
          </Heading>
          <Paragraph>Estou graduando em Análise e Desenvolvimento de Sistemas na Fatec Prof. Waldomiro May, tenho conhecimento em desenvolvimento web, HTML, CSS, Javascript, PHP e também tenho conhecimento em banco de dados SQL, atualmente estou estudando ReactJS, e me aprofundando em Javascript e PHP. Morei em Dublin, Irlanda por um ano, então meu inglês é nível avaçado. Futuramente pretendo me aprofundar em NodeJS para back-end e VueJS para front-end. Atualmente estou trabalhando no projeto {' '}
            <NextLink href="/works/inkdrop"><Link>Inkdrop</Link></NextLink>
            .
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/works">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>
        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>1991</BioYear>
            Nascido em Cachoeira Paulista/SP, Brasil.
          </BioSection>
          <BioSection>
            <BioYear>2010 - 2013</BioYear>
            Trabalhei como montador de ferramentas de corte, dobre e estampo na empresa Iochpe Maxion em Cruzeiro/SP.
          </BioSection>
          <BioSection>
            <BioYear>2014</BioYear>
            Intercâmbio de Línguas em Dublin, Irlanda.
          </BioSection>
          <BioSection>
            <BioYear>2016</BioYear>
            Estágio de Engenharia de Projetos na BASF, Guaratinguetá/SP.
          </BioSection>
          <BioSection>
            <BioYear>2017</BioYear>
            Estágio de Engenharia de Qualidade na CPI Papéis, Cruzeiro/SP.
          </BioSection>
          <BioSection>
            <BioYear>2018 - Present</BioYear>
            Professor de Língua Inglesa, Change Language School.
          </BioSection>
          <BioSection>
            <BioYear>2018 - Present</BioYear>
            Graduando em Análise e Desenvolvimento de Sistemas, Fatec Cruzeiro.
          </BioSection>
          <BioSection>
            <BioYear>2021 - Present</BioYear>
            Estagiário em Tecnologia e Inovação, Plus Gestão & Tecnologia, utilizando Javascript, PHP, SQL.
          </BioSection>
          <BioSection>
            <BioYear>2022</BioYear>
            Engenharia de Produção, Facic Cruzeiro.
          </BioSection> 
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            I ❤
          </Heading>
          <Paragraph>
            Estudar, video game, assistir futebol, malhar, escutar música e codar.
          </Paragraph>
        </Section>
      </Container>
    </Layout>
  )
}

export default Page