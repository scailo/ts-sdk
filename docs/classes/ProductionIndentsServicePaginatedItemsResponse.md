[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ProductionIndentsServicePaginatedItemsResponse

# Class: ProductionIndentsServicePaginatedItemsResponse

Describes the response to a pagination items request

**`Generated`**

from message Scailo.ProductionIndentsServicePaginatedItemsResponse

## Hierarchy

- `Message`\<[`ProductionIndentsServicePaginatedItemsResponse`](ProductionIndentsServicePaginatedItemsResponse.md)\>

  ↳ **`ProductionIndentsServicePaginatedItemsResponse`**

## Table of contents

### Constructors

- [constructor](ProductionIndentsServicePaginatedItemsResponse.md#constructor)

### Properties

- [count](ProductionIndentsServicePaginatedItemsResponse.md#count)
- [offset](ProductionIndentsServicePaginatedItemsResponse.md#offset)
- [payload](ProductionIndentsServicePaginatedItemsResponse.md#payload)
- [total](ProductionIndentsServicePaginatedItemsResponse.md#total)
- [fields](ProductionIndentsServicePaginatedItemsResponse.md#fields)
- [runtime](ProductionIndentsServicePaginatedItemsResponse.md#runtime)
- [typeName](ProductionIndentsServicePaginatedItemsResponse.md#typename)

### Methods

- [clone](ProductionIndentsServicePaginatedItemsResponse.md#clone)
- [equals](ProductionIndentsServicePaginatedItemsResponse.md#equals)
- [fromBinary](ProductionIndentsServicePaginatedItemsResponse.md#frombinary)
- [fromJson](ProductionIndentsServicePaginatedItemsResponse.md#fromjson)
- [fromJsonString](ProductionIndentsServicePaginatedItemsResponse.md#fromjsonstring)
- [getType](ProductionIndentsServicePaginatedItemsResponse.md#gettype)
- [toBinary](ProductionIndentsServicePaginatedItemsResponse.md#tobinary)
- [toJSON](ProductionIndentsServicePaginatedItemsResponse.md#tojson)
- [toJson](ProductionIndentsServicePaginatedItemsResponse.md#tojson-1)
- [toJsonString](ProductionIndentsServicePaginatedItemsResponse.md#tojsonstring)
- [equals](ProductionIndentsServicePaginatedItemsResponse.md#equals-1)
- [fromBinary](ProductionIndentsServicePaginatedItemsResponse.md#frombinary-1)
- [fromJson](ProductionIndentsServicePaginatedItemsResponse.md#fromjson-1)
- [fromJsonString](ProductionIndentsServicePaginatedItemsResponse.md#fromjsonstring-1)

## Constructors

### constructor

• **new ProductionIndentsServicePaginatedItemsResponse**(`data?`): [`ProductionIndentsServicePaginatedItemsResponse`](ProductionIndentsServicePaginatedItemsResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ProductionIndentsServicePaginatedItemsResponse`](ProductionIndentsServicePaginatedItemsResponse.md)\> |

#### Returns

[`ProductionIndentsServicePaginatedItemsResponse`](ProductionIndentsServicePaginatedItemsResponse.md)

#### Overrides

Message\&lt;ProductionIndentsServicePaginatedItemsResponse\&gt;.constructor

#### Defined in

[src/production_indents.scailo_pb.ts:2079](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/production_indents.scailo_pb.ts#L2079)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records in this payload

**`Generated`**

from field: uint64 count = 1;

#### Defined in

[src/production_indents.scailo_pb.ts:2056](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/production_indents.scailo_pb.ts#L2056)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that has been offset before fetching the records. This is the same value that has been sent as part of the pagination request

**`Generated`**

from field: uint64 offset = 2;

#### Defined in

[src/production_indents.scailo_pb.ts:2063](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/production_indents.scailo_pb.ts#L2063)

___

### payload

• **payload**: [`ProductionIndentItem`](ProductionIndentItem.md)[] = `[]`

The list of records

**`Generated`**

from field: repeated Scailo.ProductionIndentItem payload = 4;

#### Defined in

[src/production_indents.scailo_pb.ts:2077](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/production_indents.scailo_pb.ts#L2077)

___

### total

• **total**: `bigint` = `protoInt64.zero`

The total number of records that are available

**`Generated`**

from field: uint64 total = 3;

#### Defined in

[src/production_indents.scailo_pb.ts:2070](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/production_indents.scailo_pb.ts#L2070)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/production_indents.scailo_pb.ts:2086](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/production_indents.scailo_pb.ts#L2086)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/production_indents.scailo_pb.ts:2084](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/production_indents.scailo_pb.ts#L2084)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ProductionIndentsServicePaginatedItemsResponse"``

#### Defined in

[src/production_indents.scailo_pb.ts:2085](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/production_indents.scailo_pb.ts#L2085)

## Methods

### clone

▸ **clone**(): [`ProductionIndentsServicePaginatedItemsResponse`](ProductionIndentsServicePaginatedItemsResponse.md)

Create a deep copy.

#### Returns

[`ProductionIndentsServicePaginatedItemsResponse`](ProductionIndentsServicePaginatedItemsResponse.md)

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
| `other` | `undefined` \| ``null`` \| [`ProductionIndentsServicePaginatedItemsResponse`](ProductionIndentsServicePaginatedItemsResponse.md) \| `PlainMessage`\<[`ProductionIndentsServicePaginatedItemsResponse`](ProductionIndentsServicePaginatedItemsResponse.md)\> |

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

▸ **getType**(): `MessageType`\<[`ProductionIndentsServicePaginatedItemsResponse`](ProductionIndentsServicePaginatedItemsResponse.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ProductionIndentsServicePaginatedItemsResponse`](ProductionIndentsServicePaginatedItemsResponse.md)\>

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
| `a` | `undefined` \| [`ProductionIndentsServicePaginatedItemsResponse`](ProductionIndentsServicePaginatedItemsResponse.md) \| `PlainMessage`\<[`ProductionIndentsServicePaginatedItemsResponse`](ProductionIndentsServicePaginatedItemsResponse.md)\> |
| `b` | `undefined` \| [`ProductionIndentsServicePaginatedItemsResponse`](ProductionIndentsServicePaginatedItemsResponse.md) \| `PlainMessage`\<[`ProductionIndentsServicePaginatedItemsResponse`](ProductionIndentsServicePaginatedItemsResponse.md)\> |

#### Returns

`boolean`

#### Defined in

[src/production_indents.scailo_pb.ts:2105](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/production_indents.scailo_pb.ts#L2105)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ProductionIndentsServicePaginatedItemsResponse`](ProductionIndentsServicePaginatedItemsResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ProductionIndentsServicePaginatedItemsResponse`](ProductionIndentsServicePaginatedItemsResponse.md)

#### Defined in

[src/production_indents.scailo_pb.ts:2093](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/production_indents.scailo_pb.ts#L2093)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ProductionIndentsServicePaginatedItemsResponse`](ProductionIndentsServicePaginatedItemsResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ProductionIndentsServicePaginatedItemsResponse`](ProductionIndentsServicePaginatedItemsResponse.md)

#### Defined in

[src/production_indents.scailo_pb.ts:2097](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/production_indents.scailo_pb.ts#L2097)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ProductionIndentsServicePaginatedItemsResponse`](ProductionIndentsServicePaginatedItemsResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ProductionIndentsServicePaginatedItemsResponse`](ProductionIndentsServicePaginatedItemsResponse.md)

#### Defined in

[src/production_indents.scailo_pb.ts:2101](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/production_indents.scailo_pb.ts#L2101)
