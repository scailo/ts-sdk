[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / PurchasesIndentsServicePaginationResponse

# Class: PurchasesIndentsServicePaginationResponse

Describes the response to a pagination request

**`Generated`**

from message Scailo.PurchasesIndentsServicePaginationResponse

## Hierarchy

- `Message`\<[`PurchasesIndentsServicePaginationResponse`](PurchasesIndentsServicePaginationResponse.md)\>

  ↳ **`PurchasesIndentsServicePaginationResponse`**

## Table of contents

### Constructors

- [constructor](PurchasesIndentsServicePaginationResponse.md#constructor)

### Properties

- [count](PurchasesIndentsServicePaginationResponse.md#count)
- [offset](PurchasesIndentsServicePaginationResponse.md#offset)
- [payload](PurchasesIndentsServicePaginationResponse.md#payload)
- [total](PurchasesIndentsServicePaginationResponse.md#total)
- [fields](PurchasesIndentsServicePaginationResponse.md#fields)
- [runtime](PurchasesIndentsServicePaginationResponse.md#runtime)
- [typeName](PurchasesIndentsServicePaginationResponse.md#typename)

### Methods

- [clone](PurchasesIndentsServicePaginationResponse.md#clone)
- [equals](PurchasesIndentsServicePaginationResponse.md#equals)
- [fromBinary](PurchasesIndentsServicePaginationResponse.md#frombinary)
- [fromJson](PurchasesIndentsServicePaginationResponse.md#fromjson)
- [fromJsonString](PurchasesIndentsServicePaginationResponse.md#fromjsonstring)
- [getType](PurchasesIndentsServicePaginationResponse.md#gettype)
- [toBinary](PurchasesIndentsServicePaginationResponse.md#tobinary)
- [toJSON](PurchasesIndentsServicePaginationResponse.md#tojson)
- [toJson](PurchasesIndentsServicePaginationResponse.md#tojson-1)
- [toJsonString](PurchasesIndentsServicePaginationResponse.md#tojsonstring)
- [equals](PurchasesIndentsServicePaginationResponse.md#equals-1)
- [fromBinary](PurchasesIndentsServicePaginationResponse.md#frombinary-1)
- [fromJson](PurchasesIndentsServicePaginationResponse.md#fromjson-1)
- [fromJsonString](PurchasesIndentsServicePaginationResponse.md#fromjsonstring-1)

## Constructors

### constructor

• **new PurchasesIndentsServicePaginationResponse**(`data?`): [`PurchasesIndentsServicePaginationResponse`](PurchasesIndentsServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`PurchasesIndentsServicePaginationResponse`](PurchasesIndentsServicePaginationResponse.md)\> |

#### Returns

[`PurchasesIndentsServicePaginationResponse`](PurchasesIndentsServicePaginationResponse.md)

#### Overrides

Message\&lt;PurchasesIndentsServicePaginationResponse\&gt;.constructor

#### Defined in

[src/purchases_indents.scailo_pb.ts:1259](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_indents.scailo_pb.ts#L1259)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records in this payload

**`Generated`**

from field: uint64 count = 1;

#### Defined in

[src/purchases_indents.scailo_pb.ts:1236](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_indents.scailo_pb.ts#L1236)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that has been offset before fetching the records. This is the same value that has been sent as part of the pagination request

**`Generated`**

from field: uint64 offset = 2;

#### Defined in

[src/purchases_indents.scailo_pb.ts:1243](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_indents.scailo_pb.ts#L1243)

___

### payload

• **payload**: [`PurchaseIndent`](PurchaseIndent.md)[] = `[]`

The list of records

**`Generated`**

from field: repeated Scailo.PurchaseIndent payload = 4;

#### Defined in

[src/purchases_indents.scailo_pb.ts:1257](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_indents.scailo_pb.ts#L1257)

___

### total

• **total**: `bigint` = `protoInt64.zero`

The total number of records that are available

**`Generated`**

from field: uint64 total = 3;

#### Defined in

[src/purchases_indents.scailo_pb.ts:1250](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_indents.scailo_pb.ts#L1250)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/purchases_indents.scailo_pb.ts:1266](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_indents.scailo_pb.ts#L1266)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/purchases_indents.scailo_pb.ts:1264](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_indents.scailo_pb.ts#L1264)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.PurchasesIndentsServicePaginationResponse"``

#### Defined in

[src/purchases_indents.scailo_pb.ts:1265](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_indents.scailo_pb.ts#L1265)

## Methods

### clone

▸ **clone**(): [`PurchasesIndentsServicePaginationResponse`](PurchasesIndentsServicePaginationResponse.md)

Create a deep copy.

#### Returns

[`PurchasesIndentsServicePaginationResponse`](PurchasesIndentsServicePaginationResponse.md)

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
| `other` | `undefined` \| ``null`` \| [`PurchasesIndentsServicePaginationResponse`](PurchasesIndentsServicePaginationResponse.md) \| `PlainMessage`\<[`PurchasesIndentsServicePaginationResponse`](PurchasesIndentsServicePaginationResponse.md)\> |

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

▸ **getType**(): `MessageType`\<[`PurchasesIndentsServicePaginationResponse`](PurchasesIndentsServicePaginationResponse.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`PurchasesIndentsServicePaginationResponse`](PurchasesIndentsServicePaginationResponse.md)\>

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
| `a` | `undefined` \| [`PurchasesIndentsServicePaginationResponse`](PurchasesIndentsServicePaginationResponse.md) \| `PlainMessage`\<[`PurchasesIndentsServicePaginationResponse`](PurchasesIndentsServicePaginationResponse.md)\> |
| `b` | `undefined` \| [`PurchasesIndentsServicePaginationResponse`](PurchasesIndentsServicePaginationResponse.md) \| `PlainMessage`\<[`PurchasesIndentsServicePaginationResponse`](PurchasesIndentsServicePaginationResponse.md)\> |

#### Returns

`boolean`

#### Defined in

[src/purchases_indents.scailo_pb.ts:1285](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_indents.scailo_pb.ts#L1285)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`PurchasesIndentsServicePaginationResponse`](PurchasesIndentsServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`PurchasesIndentsServicePaginationResponse`](PurchasesIndentsServicePaginationResponse.md)

#### Defined in

[src/purchases_indents.scailo_pb.ts:1273](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_indents.scailo_pb.ts#L1273)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`PurchasesIndentsServicePaginationResponse`](PurchasesIndentsServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PurchasesIndentsServicePaginationResponse`](PurchasesIndentsServicePaginationResponse.md)

#### Defined in

[src/purchases_indents.scailo_pb.ts:1277](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_indents.scailo_pb.ts#L1277)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`PurchasesIndentsServicePaginationResponse`](PurchasesIndentsServicePaginationResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PurchasesIndentsServicePaginationResponse`](PurchasesIndentsServicePaginationResponse.md)

#### Defined in

[src/purchases_indents.scailo_pb.ts:1281](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/purchases_indents.scailo_pb.ts#L1281)
