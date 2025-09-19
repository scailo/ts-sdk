[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SaleReceiptAncillaryParameters

# Class: SaleReceiptAncillaryParameters

Stores the UUID references of the record

**`Generated`**

from message Scailo.SaleReceiptAncillaryParameters

## Hierarchy

- `Message`\<[`SaleReceiptAncillaryParameters`](SaleReceiptAncillaryParameters.md)\>

  ↳ **`SaleReceiptAncillaryParameters`**

## Table of contents

### Constructors

- [constructor](SaleReceiptAncillaryParameters.md#constructor)

### Properties

- [bankAccountUuid](SaleReceiptAncillaryParameters.md#bankaccountuuid)
- [clientUuid](SaleReceiptAncillaryParameters.md#clientuuid)
- [currencyUuid](SaleReceiptAncillaryParameters.md#currencyuuid)
- [refUuid](SaleReceiptAncillaryParameters.md#refuuid)
- [fields](SaleReceiptAncillaryParameters.md#fields)
- [runtime](SaleReceiptAncillaryParameters.md#runtime)
- [typeName](SaleReceiptAncillaryParameters.md#typename)

### Methods

- [clone](SaleReceiptAncillaryParameters.md#clone)
- [equals](SaleReceiptAncillaryParameters.md#equals)
- [fromBinary](SaleReceiptAncillaryParameters.md#frombinary)
- [fromJson](SaleReceiptAncillaryParameters.md#fromjson)
- [fromJsonString](SaleReceiptAncillaryParameters.md#fromjsonstring)
- [getType](SaleReceiptAncillaryParameters.md#gettype)
- [toBinary](SaleReceiptAncillaryParameters.md#tobinary)
- [toJSON](SaleReceiptAncillaryParameters.md#tojson)
- [toJson](SaleReceiptAncillaryParameters.md#tojson-1)
- [toJsonString](SaleReceiptAncillaryParameters.md#tojsonstring)
- [equals](SaleReceiptAncillaryParameters.md#equals-1)
- [fromBinary](SaleReceiptAncillaryParameters.md#frombinary-1)
- [fromJson](SaleReceiptAncillaryParameters.md#fromjson-1)
- [fromJsonString](SaleReceiptAncillaryParameters.md#fromjsonstring-1)

## Constructors

### constructor

• **new SaleReceiptAncillaryParameters**(`data?`): [`SaleReceiptAncillaryParameters`](SaleReceiptAncillaryParameters.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SaleReceiptAncillaryParameters`](SaleReceiptAncillaryParameters.md)\> |

#### Returns

[`SaleReceiptAncillaryParameters`](SaleReceiptAncillaryParameters.md)

#### Overrides

Message\&lt;SaleReceiptAncillaryParameters\&gt;.constructor

#### Defined in

[src/sales_receipts.scailo_pb.ts:404](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_receipts.scailo_pb.ts#L404)

## Properties

### bankAccountUuid

• **bankAccountUuid**: `string` = `""`

The UUID of the bank account (the UUID of the bank_account_id)

**`Generated`**

from field: string bank_account_uuid = 215;

#### Defined in

[src/sales_receipts.scailo_pb.ts:395](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_receipts.scailo_pb.ts#L395)

___

### clientUuid

• **clientUuid**: `string` = `""`

The UUID of the client (the UUID of the associated client_id)

**`Generated`**

from field: string client_uuid = 214;

#### Defined in

[src/sales_receipts.scailo_pb.ts:388](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_receipts.scailo_pb.ts#L388)

___

### currencyUuid

• **currencyUuid**: `string` = `""`

The UUID of the currency (the UUID of the associated currency)

**`Generated`**

from field: string currency_uuid = 216;

#### Defined in

[src/sales_receipts.scailo_pb.ts:402](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_receipts.scailo_pb.ts#L402)

___

### refUuid

• **refUuid**: `string` = `""`

The UUID of the ref_id (the UUID of the associated ref_id)

**`Generated`**

from field: string ref_uuid = 213;

#### Defined in

[src/sales_receipts.scailo_pb.ts:381](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_receipts.scailo_pb.ts#L381)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/sales_receipts.scailo_pb.ts:411](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_receipts.scailo_pb.ts#L411)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/sales_receipts.scailo_pb.ts:409](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_receipts.scailo_pb.ts#L409)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SaleReceiptAncillaryParameters"``

#### Defined in

[src/sales_receipts.scailo_pb.ts:410](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_receipts.scailo_pb.ts#L410)

## Methods

### clone

▸ **clone**(): [`SaleReceiptAncillaryParameters`](SaleReceiptAncillaryParameters.md)

Create a deep copy.

#### Returns

[`SaleReceiptAncillaryParameters`](SaleReceiptAncillaryParameters.md)

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
| `other` | `undefined` \| ``null`` \| [`SaleReceiptAncillaryParameters`](SaleReceiptAncillaryParameters.md) \| `PlainMessage`\<[`SaleReceiptAncillaryParameters`](SaleReceiptAncillaryParameters.md)\> |

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

▸ **getType**(): `MessageType`\<[`SaleReceiptAncillaryParameters`](SaleReceiptAncillaryParameters.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SaleReceiptAncillaryParameters`](SaleReceiptAncillaryParameters.md)\>

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
| `a` | `undefined` \| [`SaleReceiptAncillaryParameters`](SaleReceiptAncillaryParameters.md) \| `PlainMessage`\<[`SaleReceiptAncillaryParameters`](SaleReceiptAncillaryParameters.md)\> |
| `b` | `undefined` \| [`SaleReceiptAncillaryParameters`](SaleReceiptAncillaryParameters.md) \| `PlainMessage`\<[`SaleReceiptAncillaryParameters`](SaleReceiptAncillaryParameters.md)\> |

#### Returns

`boolean`

#### Defined in

[src/sales_receipts.scailo_pb.ts:430](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_receipts.scailo_pb.ts#L430)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SaleReceiptAncillaryParameters`](SaleReceiptAncillaryParameters.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SaleReceiptAncillaryParameters`](SaleReceiptAncillaryParameters.md)

#### Defined in

[src/sales_receipts.scailo_pb.ts:418](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_receipts.scailo_pb.ts#L418)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SaleReceiptAncillaryParameters`](SaleReceiptAncillaryParameters.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SaleReceiptAncillaryParameters`](SaleReceiptAncillaryParameters.md)

#### Defined in

[src/sales_receipts.scailo_pb.ts:422](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_receipts.scailo_pb.ts#L422)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SaleReceiptAncillaryParameters`](SaleReceiptAncillaryParameters.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SaleReceiptAncillaryParameters`](SaleReceiptAncillaryParameters.md)

#### Defined in

[src/sales_receipts.scailo_pb.ts:426](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_receipts.scailo_pb.ts#L426)
