[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SalesReceiptAncillaryParameters

# Class: SalesReceiptAncillaryParameters

Stores the UUID references of the record

**`Generated`**

from message Scailo.SalesReceiptAncillaryParameters

## Hierarchy

- `Message`\<[`SalesReceiptAncillaryParameters`](SalesReceiptAncillaryParameters.md)\>

  ↳ **`SalesReceiptAncillaryParameters`**

## Table of contents

### Constructors

- [constructor](SalesReceiptAncillaryParameters.md#constructor)

### Properties

- [bankAccountUuid](SalesReceiptAncillaryParameters.md#bankaccountuuid)
- [clientUuid](SalesReceiptAncillaryParameters.md#clientuuid)
- [currencyUuid](SalesReceiptAncillaryParameters.md#currencyuuid)
- [refUuid](SalesReceiptAncillaryParameters.md#refuuid)
- [fields](SalesReceiptAncillaryParameters.md#fields)
- [runtime](SalesReceiptAncillaryParameters.md#runtime)
- [typeName](SalesReceiptAncillaryParameters.md#typename)

### Methods

- [clone](SalesReceiptAncillaryParameters.md#clone)
- [equals](SalesReceiptAncillaryParameters.md#equals)
- [fromBinary](SalesReceiptAncillaryParameters.md#frombinary)
- [fromJson](SalesReceiptAncillaryParameters.md#fromjson)
- [fromJsonString](SalesReceiptAncillaryParameters.md#fromjsonstring)
- [getType](SalesReceiptAncillaryParameters.md#gettype)
- [toBinary](SalesReceiptAncillaryParameters.md#tobinary)
- [toJSON](SalesReceiptAncillaryParameters.md#tojson)
- [toJson](SalesReceiptAncillaryParameters.md#tojson-1)
- [toJsonString](SalesReceiptAncillaryParameters.md#tojsonstring)
- [equals](SalesReceiptAncillaryParameters.md#equals-1)
- [fromBinary](SalesReceiptAncillaryParameters.md#frombinary-1)
- [fromJson](SalesReceiptAncillaryParameters.md#fromjson-1)
- [fromJsonString](SalesReceiptAncillaryParameters.md#fromjsonstring-1)

## Constructors

### constructor

• **new SalesReceiptAncillaryParameters**(`data?`): [`SalesReceiptAncillaryParameters`](SalesReceiptAncillaryParameters.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SalesReceiptAncillaryParameters`](SalesReceiptAncillaryParameters.md)\> |

#### Returns

[`SalesReceiptAncillaryParameters`](SalesReceiptAncillaryParameters.md)

#### Overrides

Message\&lt;SalesReceiptAncillaryParameters\&gt;.constructor

#### Defined in

[src/sales_receipts.scailo_pb.ts:447](https://github.com/scailo/ts-sdk/blob/cebac9503dc5e52d335c8f92756a3a92d88c2091/src/sales_receipts.scailo_pb.ts#L447)

## Properties

### bankAccountUuid

• **bankAccountUuid**: `string` = `""`

The UUID of the bank account (the UUID of the bank_account_id)

**`Generated`**

from field: string bank_account_uuid = 215;

#### Defined in

[src/sales_receipts.scailo_pb.ts:438](https://github.com/scailo/ts-sdk/blob/cebac9503dc5e52d335c8f92756a3a92d88c2091/src/sales_receipts.scailo_pb.ts#L438)

___

### clientUuid

• **clientUuid**: `string` = `""`

The UUID of the client (the UUID of the associated client_id)

**`Generated`**

from field: string client_uuid = 214;

#### Defined in

[src/sales_receipts.scailo_pb.ts:431](https://github.com/scailo/ts-sdk/blob/cebac9503dc5e52d335c8f92756a3a92d88c2091/src/sales_receipts.scailo_pb.ts#L431)

___

### currencyUuid

• **currencyUuid**: `string` = `""`

The UUID of the currency (the UUID of the associated currency)

**`Generated`**

from field: string currency_uuid = 216;

#### Defined in

[src/sales_receipts.scailo_pb.ts:445](https://github.com/scailo/ts-sdk/blob/cebac9503dc5e52d335c8f92756a3a92d88c2091/src/sales_receipts.scailo_pb.ts#L445)

___

### refUuid

• **refUuid**: `string` = `""`

The UUID of the ref_id (the UUID of the associated ref_id)

**`Generated`**

from field: string ref_uuid = 213;

#### Defined in

[src/sales_receipts.scailo_pb.ts:424](https://github.com/scailo/ts-sdk/blob/cebac9503dc5e52d335c8f92756a3a92d88c2091/src/sales_receipts.scailo_pb.ts#L424)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/sales_receipts.scailo_pb.ts:454](https://github.com/scailo/ts-sdk/blob/cebac9503dc5e52d335c8f92756a3a92d88c2091/src/sales_receipts.scailo_pb.ts#L454)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/sales_receipts.scailo_pb.ts:452](https://github.com/scailo/ts-sdk/blob/cebac9503dc5e52d335c8f92756a3a92d88c2091/src/sales_receipts.scailo_pb.ts#L452)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SalesReceiptAncillaryParameters"``

#### Defined in

[src/sales_receipts.scailo_pb.ts:453](https://github.com/scailo/ts-sdk/blob/cebac9503dc5e52d335c8f92756a3a92d88c2091/src/sales_receipts.scailo_pb.ts#L453)

## Methods

### clone

▸ **clone**(): [`SalesReceiptAncillaryParameters`](SalesReceiptAncillaryParameters.md)

Create a deep copy.

#### Returns

[`SalesReceiptAncillaryParameters`](SalesReceiptAncillaryParameters.md)

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
| `other` | `undefined` \| ``null`` \| [`SalesReceiptAncillaryParameters`](SalesReceiptAncillaryParameters.md) \| `PlainMessage`\<[`SalesReceiptAncillaryParameters`](SalesReceiptAncillaryParameters.md)\> |

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

▸ **getType**(): `MessageType`\<[`SalesReceiptAncillaryParameters`](SalesReceiptAncillaryParameters.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SalesReceiptAncillaryParameters`](SalesReceiptAncillaryParameters.md)\>

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
| `a` | `undefined` \| [`SalesReceiptAncillaryParameters`](SalesReceiptAncillaryParameters.md) \| `PlainMessage`\<[`SalesReceiptAncillaryParameters`](SalesReceiptAncillaryParameters.md)\> |
| `b` | `undefined` \| [`SalesReceiptAncillaryParameters`](SalesReceiptAncillaryParameters.md) \| `PlainMessage`\<[`SalesReceiptAncillaryParameters`](SalesReceiptAncillaryParameters.md)\> |

#### Returns

`boolean`

#### Defined in

[src/sales_receipts.scailo_pb.ts:473](https://github.com/scailo/ts-sdk/blob/cebac9503dc5e52d335c8f92756a3a92d88c2091/src/sales_receipts.scailo_pb.ts#L473)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SalesReceiptAncillaryParameters`](SalesReceiptAncillaryParameters.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SalesReceiptAncillaryParameters`](SalesReceiptAncillaryParameters.md)

#### Defined in

[src/sales_receipts.scailo_pb.ts:461](https://github.com/scailo/ts-sdk/blob/cebac9503dc5e52d335c8f92756a3a92d88c2091/src/sales_receipts.scailo_pb.ts#L461)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SalesReceiptAncillaryParameters`](SalesReceiptAncillaryParameters.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesReceiptAncillaryParameters`](SalesReceiptAncillaryParameters.md)

#### Defined in

[src/sales_receipts.scailo_pb.ts:465](https://github.com/scailo/ts-sdk/blob/cebac9503dc5e52d335c8f92756a3a92d88c2091/src/sales_receipts.scailo_pb.ts#L465)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SalesReceiptAncillaryParameters`](SalesReceiptAncillaryParameters.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesReceiptAncillaryParameters`](SalesReceiptAncillaryParameters.md)

#### Defined in

[src/sales_receipts.scailo_pb.ts:469](https://github.com/scailo/ts-sdk/blob/cebac9503dc5e52d335c8f92756a3a92d88c2091/src/sales_receipts.scailo_pb.ts#L469)
