[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SalesQuotationItemHistoryRequest

# Class: SalesQuotationItemHistoryRequest

Describes the parameters that are required to retrieve the history of the record

**`Generated`**

from message Scailo.SalesQuotationItemHistoryRequest

## Hierarchy

- `Message`\<[`SalesQuotationItemHistoryRequest`](SalesQuotationItemHistoryRequest.md)\>

  ↳ **`SalesQuotationItemHistoryRequest`**

## Table of contents

### Constructors

- [constructor](SalesQuotationItemHistoryRequest.md#constructor)

### Properties

- [familyId](SalesQuotationItemHistoryRequest.md#familyid)
- [salesQuotationId](SalesQuotationItemHistoryRequest.md#salesquotationid)
- [fields](SalesQuotationItemHistoryRequest.md#fields)
- [runtime](SalesQuotationItemHistoryRequest.md#runtime)
- [typeName](SalesQuotationItemHistoryRequest.md#typename)

### Methods

- [clone](SalesQuotationItemHistoryRequest.md#clone)
- [equals](SalesQuotationItemHistoryRequest.md#equals)
- [fromBinary](SalesQuotationItemHistoryRequest.md#frombinary)
- [fromJson](SalesQuotationItemHistoryRequest.md#fromjson)
- [fromJsonString](SalesQuotationItemHistoryRequest.md#fromjsonstring)
- [getType](SalesQuotationItemHistoryRequest.md#gettype)
- [toBinary](SalesQuotationItemHistoryRequest.md#tobinary)
- [toJSON](SalesQuotationItemHistoryRequest.md#tojson)
- [toJson](SalesQuotationItemHistoryRequest.md#tojson-1)
- [toJsonString](SalesQuotationItemHistoryRequest.md#tojsonstring)
- [equals](SalesQuotationItemHistoryRequest.md#equals-1)
- [fromBinary](SalesQuotationItemHistoryRequest.md#frombinary-1)
- [fromJson](SalesQuotationItemHistoryRequest.md#fromjson-1)
- [fromJsonString](SalesQuotationItemHistoryRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new SalesQuotationItemHistoryRequest**(`data?`): [`SalesQuotationItemHistoryRequest`](SalesQuotationItemHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SalesQuotationItemHistoryRequest`](SalesQuotationItemHistoryRequest.md)\> |

#### Returns

[`SalesQuotationItemHistoryRequest`](SalesQuotationItemHistoryRequest.md)

#### Overrides

Message\&lt;SalesQuotationItemHistoryRequest\&gt;.constructor

#### Defined in

[src/sales_quotations.scailo_pb.ts:1483](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_quotations.scailo_pb.ts#L1483)

## Properties

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the family ID

**`Generated`**

from field: uint64 family_id = 11;

#### Defined in

[src/sales_quotations.scailo_pb.ts:1481](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_quotations.scailo_pb.ts#L1481)

___

### salesQuotationId

• **salesQuotationId**: `bigint` = `protoInt64.zero`

Stores the sales quotation ID

**`Generated`**

from field: uint64 sales_quotation_id = 10;

#### Defined in

[src/sales_quotations.scailo_pb.ts:1474](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_quotations.scailo_pb.ts#L1474)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/sales_quotations.scailo_pb.ts:1490](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_quotations.scailo_pb.ts#L1490)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/sales_quotations.scailo_pb.ts:1488](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_quotations.scailo_pb.ts#L1488)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SalesQuotationItemHistoryRequest"``

#### Defined in

[src/sales_quotations.scailo_pb.ts:1489](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_quotations.scailo_pb.ts#L1489)

## Methods

### clone

▸ **clone**(): [`SalesQuotationItemHistoryRequest`](SalesQuotationItemHistoryRequest.md)

Create a deep copy.

#### Returns

[`SalesQuotationItemHistoryRequest`](SalesQuotationItemHistoryRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`SalesQuotationItemHistoryRequest`](SalesQuotationItemHistoryRequest.md) \| `PlainMessage`\<[`SalesQuotationItemHistoryRequest`](SalesQuotationItemHistoryRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`SalesQuotationItemHistoryRequest`](SalesQuotationItemHistoryRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SalesQuotationItemHistoryRequest`](SalesQuotationItemHistoryRequest.md)\>

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
| `a` | `undefined` \| [`SalesQuotationItemHistoryRequest`](SalesQuotationItemHistoryRequest.md) \| `PlainMessage`\<[`SalesQuotationItemHistoryRequest`](SalesQuotationItemHistoryRequest.md)\> |
| `b` | `undefined` \| [`SalesQuotationItemHistoryRequest`](SalesQuotationItemHistoryRequest.md) \| `PlainMessage`\<[`SalesQuotationItemHistoryRequest`](SalesQuotationItemHistoryRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/sales_quotations.scailo_pb.ts:1507](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_quotations.scailo_pb.ts#L1507)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SalesQuotationItemHistoryRequest`](SalesQuotationItemHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SalesQuotationItemHistoryRequest`](SalesQuotationItemHistoryRequest.md)

#### Defined in

[src/sales_quotations.scailo_pb.ts:1495](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_quotations.scailo_pb.ts#L1495)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SalesQuotationItemHistoryRequest`](SalesQuotationItemHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesQuotationItemHistoryRequest`](SalesQuotationItemHistoryRequest.md)

#### Defined in

[src/sales_quotations.scailo_pb.ts:1499](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_quotations.scailo_pb.ts#L1499)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SalesQuotationItemHistoryRequest`](SalesQuotationItemHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesQuotationItemHistoryRequest`](SalesQuotationItemHistoryRequest.md)

#### Defined in

[src/sales_quotations.scailo_pb.ts:1503](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/sales_quotations.scailo_pb.ts#L1503)
