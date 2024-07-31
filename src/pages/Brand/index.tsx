import { Flex, Card, Cards, Text, VectorField, Logo, ShapeField, Button } from '@/components';

export function Brand() {
  return (
    <>
      <Cards>
        <Card.Secondary>
          <div className="card-header">
            <Text.Body secondary>Primary theme prop</Text.Body>
            <Button href="https://www.example.com" target="_blank">
              Default theme
            </Button>
            <Button theme={0} href="https://www.example.com" target="_blank">
              Theme zero
            </Button>
            <Button theme={1} href="https://www.example.com" target="_blank">
              Theme one
            </Button>
            <Button theme={2} href="https://www.example.com" target="_blank">
              Theme two
            </Button>
            <Button theme={3} href="https://www.example.com" target="_blank">
              Theme three
            </Button>
            <Button theme={4} href="https://www.example.com" target="_blank">
              Theme four
            </Button>
          </div>
        </Card.Secondary>
        <Card dataTheme={4}>
          <div className="card-header">
            <Text.Body secondary>Secondary theme prop</Text.Body>

            <Button type="secondary" to="/signup" target="_blank">
              To signup
            </Button>
            <Button type="secondary" theme={0} href="https://www.example.com" target="_blank">
              Theme zero 2nd
            </Button>
            <Button type="secondary" theme={1} href="https://www.example.com" target="_blank">
              Theme one 2nd
            </Button>
            <Button type="secondary" theme={2} href="https://www.example.com" target="_blank">
              Theme two 2nd
            </Button>
            <Button type="secondary" theme={3} href="https://www.example.com" target="_blank">
              Theme three 2nd
            </Button>
            <Button type="secondary" theme={4} href="https://www.example.com" target="_blank">
              Theme four 2nd
            </Button>
          </div>
        </Card>
        <Card.Secondary dataTheme={4}>
          <div className="card-header">
            <Text.Body secondary>Secondary theme prop</Text.Body>

            <Button type="secondary" to="/signup" target="_blank">
              To signup
            </Button>
            <Button type="secondary" theme={0} href="https://www.example.com" target="_blank">
              Theme zero 2nd
            </Button>
            <Button type="secondary" theme={1} href="https://www.example.com" target="_blank">
              Theme one 2nd
            </Button>
            <Button type="secondary" theme={2} href="https://www.example.com" target="_blank">
              Theme two 2nd
            </Button>
            <Button type="secondary" theme={3} href="https://www.example.com" target="_blank">
              Theme three 2nd
            </Button>
            <Button type="secondary" theme={4} href="https://www.example.com" target="_blank">
              Theme four 2nd
            </Button>
          </div>
        </Card.Secondary>
        <Card.Secondary>
          <div className="card-header">
            <Text.Body secondary>Small button</Text.Body>
            <Button size="small" href="https://www.example.com" target="_blank">
              Default theme
            </Button>
            <Button size="small" theme={0} href="https://www.example.com" target="_blank">
              Theme zero
            </Button>
            <Button size="small" theme={1} href="https://www.example.com" target="_blank">
              Theme one
            </Button>
            <Button size="small" theme={2} href="https://www.example.com" target="_blank">
              Theme two
            </Button>
            <Button size="small" theme={3} href="https://www.example.com" target="_blank">
              Theme three
            </Button>
            <Button size="small" theme={4} href="https://www.example.com" target="_blank">
              Theme four
            </Button>
          </div>
        </Card.Secondary>
      </Cards>
      <Cards>
        <Card dataTheme={1}>
          <div className="card-header">
            <Text.H1>Brand</Text.H1>
            <Text.H1>
              <Logo type={false} />
            </Text.H1>
          </div>
        </Card>
        <Card dataTheme={2}>
          <div className="card-header">
            <Text.H4>Vector Fields</Text.H4>
            <Flex wrap>
              <VectorField variant="swirl" />
              <VectorField variant="straight" />
              <VectorField variant="radial" />
              <VectorField variant="checker" />
              <VectorField variant="grid" />
              <VectorField variant="magnify" />
            </Flex>
          </div>
        </Card>
        <Card.Secondary dataTheme={2}>
          <div className="card-header">
            <Text.H4>Shape Fields</Text.H4>
            <ShapeField isStatic variant="bayesian" rows={55} columns={55} padding={1} />
            <ShapeField isStatic variant="bayesian" rows={24} columns={40} padding={1} />
            <ShapeField isStatic variant="bayesian" rows={55} columns={21} padding={1} />
            <ShapeField isStatic variant="bayesian" rows={28} columns={28} padding={1} />
            <ShapeField isStatic variant="swirl" />
            <ShapeField isStatic variant="dithered-gradient" />
            <ShapeField isStatic variant="radial" />
            <ShapeField isStatic variant="radial" rows={36} columns={36} padding={2} />
            <ShapeField isStatic variant="checker" />
            <ShapeField isStatic variant="pcb" />
          </div>
        </Card.Secondary>
      </Cards>
    </>
  );
}
