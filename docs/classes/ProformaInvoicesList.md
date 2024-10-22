[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ProformaInvoicesList

# Class: ProformaInvoicesList

Describes the message consisting of the list of proforma invoices

**`Generated`**

from message Scailo.ProformaInvoicesList

## Hierarchy

- `Message`\<[`ProformaInvoicesList`](ProformaInvoicesList.md)\>

  ↳ **`ProformaInvoicesList`**

## Table of contents

### Constructors

- [constructor](ProformaInvoicesList.md#constructor)

### Properties

- [list](ProformaInvoicesList.md#list)
- [fields](ProformaInvoicesList.md#fields)
- [runtime](ProformaInvoicesList.md#runtime)
- [typeName](ProformaInvoicesList.md#typename)

### Methods

- [clone](ProformaInvoicesList.md#clone)
- [equals](ProformaInvoicesList.md#equals)
- [fromBinary](ProformaInvoicesList.md#frombinary)
- [fromJson](ProformaInvoicesList.md#fromjson)
- [fromJsonString](ProformaInvoicesList.md#fromjsonstring)
- [getType](ProformaInvoicesList.md#gettype)
- [toBinary](ProformaInvoicesList.md#tobinary)
- [toJSON](ProformaInvoicesList.md#tojson)
- [toJson](ProformaInvoicesList.md#tojson-1)
- [toJsonString](ProformaInvoicesList.md#tojsonstring)
- [equals](ProformaInvoicesList.md#equals-1)
- [fromBinary](ProformaInvoicesList.md#frombinary-1)
- [fromJson](ProformaInvoicesList.md#fromjson-1)
- [fromJsonString](ProformaInvoicesList.md#fromjsonstring-1)

## Constructors

### constructor

• **new ProformaInvoicesList**(`data?`): [`ProformaInvoicesList`](ProformaInvoicesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ProformaInvoicesList`](ProformaInvoicesList.md)\> |

#### Returns

[`ProformaInvoicesList`](ProformaInvoicesList.md)

#### Overrides

Message\&lt;ProformaInvoicesList\&gt;.constructor

#### Defined in

src/proforma_invoices.scailo_pb.ts:1301

## Properties

### list

• **list**: [`ProformaInvoice`](ProformaInvoice.md)[] = `[]`

List of records

**`Generated`**

from field: repeated Scailo.ProformaInvoice list = 1;

#### Defined in

src/proforma_invoices.scailo_pb.ts:1299

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/proforma_invoices.scailo_pb.ts:1308

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/proforma_invoices.scailo_pb.ts:1306

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ProformaInvoicesList"``

#### Defined in

src/proforma_invoices.scailo_pb.ts:1307

## Methods

### clone

▸ **clone**(): [`ProformaInvoicesList`](ProformaInvoicesList.md)

Create a deep copy.

#### Returns

[`ProformaInvoicesList`](ProformaInvoicesList.md)

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
| `other` | `undefined` \| ``null`` \| [`ProformaInvoicesList`](ProformaInvoicesList.md) \| `PlainMessage`\<[`ProformaInvoicesList`](ProformaInvoicesList.md)\> |

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

▸ **getType**(): `MessageType`\<[`ProformaInvoicesList`](ProformaInvoicesList.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ProformaInvoicesList`](ProformaInvoicesList.md)\>

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
| `a` | `undefined` \| [`ProformaInvoicesList`](ProformaInvoicesList.md) \| `PlainMessage`\<[`ProformaInvoicesList`](ProformaInvoicesList.md)\> |
| `b` | `undefined` \| [`ProformaInvoicesList`](ProformaInvoicesList.md) \| `PlainMessage`\<[`ProformaInvoicesList`](ProformaInvoicesList.md)\> |

#### Returns

`boolean`

#### Defined in

src/proforma_invoices.scailo_pb.ts:1324

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ProformaInvoicesList`](ProformaInvoicesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ProformaInvoicesList`](ProformaInvoicesList.md)

#### Defined in

src/proforma_invoices.scailo_pb.ts:1312

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ProformaInvoicesList`](ProformaInvoicesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ProformaInvoicesList`](ProformaInvoicesList.md)

#### Defined in

src/proforma_invoices.scailo_pb.ts:1316

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ProformaInvoicesList`](ProformaInvoicesList.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ProformaInvoicesList`](ProformaInvoicesList.md)

#### Defined in

src/proforma_invoices.scailo_pb.ts:1320
