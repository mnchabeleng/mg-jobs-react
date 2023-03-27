import Container from '../Container'

export default function Footer() {
  return (
    <footer className="absolute flex items-center h-14 bottom-0 left-0 right-0 text-gray-100 bg-black">
        <Container className="flex-1">
          &copy; Copyright 2023 Mail &amp; Guardian
        </Container>
    </footer>
  )
}
