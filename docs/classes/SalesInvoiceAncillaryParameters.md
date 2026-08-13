[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SalesInvoiceAncillaryParameters

# Class: SalesInvoiceAncillaryParameters

Represents a read-only container for universally unique identifiers (UUIDs) of related external entities.
This message securely exposes the downstream linkages (like the source order or currency) to external
clients or frontend interfaces without revealing internal sequential IDs.

**`Generated`**

from message Scailo.SalesInvoiceAncillaryParameters

## Hierarchy

- `Message`\<[`SalesInvoiceAncillaryParameters`](SalesInvoiceAncillaryParameters.md)\>

  ↳ **`SalesInvoiceAncillaryParameters`**

## Table of contents

### Constructors

- [constructor](SalesInvoiceAncillaryParameters.md#constructor)

### Properties

- [currencyUuid](SalesInvoiceAncillaryParameters.md#currencyuuid)
- [refUuid](SalesInvoiceAncillaryParameters.md#refuuid)
- [fields](SalesInvoiceAncillaryParameters.md#fields)
- [runtime](SalesInvoiceAncillaryParameters.md#runtime)
- [typeName](SalesInvoiceAncillaryParameters.md#typename)

### Methods

- [clone](SalesInvoiceAncillaryParameters.md#clone)
- [equals](SalesInvoiceAncillaryParameters.md#equals)
- [fromBinary](SalesInvoiceAncillaryParameters.md#frombinary)
- [fromJson](SalesInvoiceAncillaryParameters.md#fromjson)
- [fromJsonString](SalesInvoiceAncillaryParameters.md#fromjsonstring)
- [getType](SalesInvoiceAncillaryParameters.md#gettype)
- [toBinary](SalesInvoiceAncillaryParameters.md#tobinary)
- [toJSON](SalesInvoiceAncillaryParameters.md#tojson)
- [toJson](SalesInvoiceAncillaryParameters.md#tojson-1)
- [toJsonString](SalesInvoiceAncillaryParameters.md#tojsonstring)
- [equals](SalesInvoiceAncillaryParameters.md#equals-1)
- [fromBinary](SalesInvoiceAncillaryParameters.md#frombinary-1)
- [fromJson](SalesInvoiceAncillaryParameters.md#fromjson-1)
- [fromJsonString](SalesInvoiceAncillaryParameters.md#fromjsonstring-1)

## Constructors

### constructor

• **new SalesInvoiceAncillaryParameters**(`data?`): [`SalesInvoiceAncillaryParameters`](SalesInvoiceAncillaryParameters.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SalesInvoiceAncillaryParameters`](SalesInvoiceAncillaryParameters.md)\> |

#### Returns

[`SalesInvoiceAncillaryParameters`](SalesInvoiceAncillaryParameters.md)

#### Overrides

Message\&lt;SalesInvoiceAncillaryParameters\&gt;.constructor

#### Defined in

[src/sales_invoices.scailo_pb.ts:948](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_invoices.scailo_pb.ts#L948)

## Properties

### currencyUuid

• **currencyUuid**: `string` = `""`

**`Mandatory`**

**`Description`**

The globally unique identifier (UUID) of the currency used for financial calculations within this invoice.

**`Example`**

```ts
"772a8422-e18b-42d4-a815-446655442222"
```

**`Regex`**

^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$

**`Format`**

Valid v4 UUID in canonical hyphenated form.

**`Generated`**

from field: string currency_uuid = 214;

#### Defined in

[src/sales_invoices.scailo_pb.ts:946](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_invoices.scailo_pb.ts#L946)

___

### refUuid

• **refUuid**: `string` = `""`

**`Mandatory`**

**`Description`**

The globally unique identifier (UUID) of the associated source document (e.g., the parent Sales Order).

**`Example`**

```ts
"661f9511-f39c-42d5-b827-557766551111"
```

**`Regex`**

^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$

**`Format`**

Valid v4 UUID in canonical hyphenated form.

**`Generated`**

from field: string ref_uuid = 213;

#### Defined in

[src/sales_invoices.scailo_pb.ts:930](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_invoices.scailo_pb.ts#L930)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/sales_invoices.scailo_pb.ts:955](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_invoices.scailo_pb.ts#L955)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/sales_invoices.scailo_pb.ts:953](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_invoices.scailo_pb.ts#L953)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SalesInvoiceAncillaryParameters"``

#### Defined in

[src/sales_invoices.scailo_pb.ts:954](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_invoices.scailo_pb.ts#L954)

## Methods

### clone

▸ **clone**(): [`SalesInvoiceAncillaryParameters`](SalesInvoiceAncillaryParameters.md)

Create a deep copy.

#### Returns

[`SalesInvoiceAncillaryParameters`](SalesInvoiceAncillaryParameters.md)

#### Inherited from

Message.clone

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:28

___

### equals

▸ **equals**(`other`): `boolean`

Compare with a message of the same type.
Note that this function disregards extensions and unknown fields.

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | `undefined` \| ``null`` \| [`SalesInvoiceAncillaryParameters`](SalesInvoiceAncillaryParameters.md) \| `PlainMessage`\<[`SalesInvoiceAncillaryParameters`](SalesInvoiceAncillaryParameters.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:24

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): `this`

Parse from binary data, merging fields.

Repeated fields are appended. Map entries are added, overwriting
existing keys.

If a message field is already present, it will be merged with the
new data.

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

`this`

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:38

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): `this`

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`this`

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:42

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): `this`

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`this`

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:46

___

### getType

▸ **getType**(): `MessageType`\<[`SalesInvoiceAncillaryParameters`](SalesInvoiceAncillaryParameters.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SalesInvoiceAncillaryParameters`](SalesInvoiceAncillaryParameters.md)\>

#### Inherited from

Message.getType

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:81

___

### toBinary

▸ **toBinary**(`options?`): `Uint8Array`

Serialize the message to binary data.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`\<`BinaryWriteOptions`\> |

#### Returns

`Uint8Array`

#### Inherited from

Message.toBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:50

___

### toJSON

▸ **toJSON**(): `JsonValue`

Override for serialization behavior. This will be invoked when calling
JSON.stringify on this message (i.e. JSON.stringify(msg)).

Note that this will not serialize google.protobuf.Any with a packed
message because the protobuf JSON format specifies that it needs to be
unpacked, and this is only possible with a type registry to look up the
message type.  As a result, attempting to serialize a message with this
type will throw an Error.

This method is protected because you should not need to invoke it
directly -- instead use JSON.stringify or toJsonString for
stringified JSON.  Alternatively, if actual JSON is desired, you should
use toJson.

#### Returns

`JsonValue`

#### Inherited from

Message.toJSON

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:75

___

### toJson

▸ **toJson**(`options?`): `JsonValue`

Serialize the message to a JSON value, a JavaScript value that can be
passed to JSON.stringify().

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`\<`JsonWriteOptions`\> |

#### Returns

`JsonValue`

#### Inherited from

Message.toJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:55

___

### toJsonString

▸ **toJsonString**(`options?`): `string`

Serialize the message to a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`\<`JsonWriteStringOptions`\> |

#### Returns

`string`

#### Inherited from

Message.toJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:59

___

### equals

▸ **equals**(`a`, `b`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `undefined` \| [`SalesInvoiceAncillaryParameters`](SalesInvoiceAncillaryParameters.md) \| `PlainMessage`\<[`SalesInvoiceAncillaryParameters`](SalesInvoiceAncillaryParameters.md)\> |
| `b` | `undefined` \| [`SalesInvoiceAncillaryParameters`](SalesInvoiceAncillaryParameters.md) \| `PlainMessage`\<[`SalesInvoiceAncillaryParameters`](SalesInvoiceAncillaryParameters.md)\> |

#### Returns

`boolean`

#### Defined in

[src/sales_invoices.scailo_pb.ts:972](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_invoices.scailo_pb.ts#L972)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SalesInvoiceAncillaryParameters`](SalesInvoiceAncillaryParameters.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SalesInvoiceAncillaryParameters`](SalesInvoiceAncillaryParameters.md)

#### Defined in

[src/sales_invoices.scailo_pb.ts:960](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_invoices.scailo_pb.ts#L960)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SalesInvoiceAncillaryParameters`](SalesInvoiceAncillaryParameters.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesInvoiceAncillaryParameters`](SalesInvoiceAncillaryParameters.md)

#### Defined in

[src/sales_invoices.scailo_pb.ts:964](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_invoices.scailo_pb.ts#L964)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SalesInvoiceAncillaryParameters`](SalesInvoiceAncillaryParameters.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesInvoiceAncillaryParameters`](SalesInvoiceAncillaryParameters.md)

#### Defined in

[src/sales_invoices.scailo_pb.ts:968](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_invoices.scailo_pb.ts#L968)
