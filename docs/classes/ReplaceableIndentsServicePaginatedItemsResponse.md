[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ReplaceableIndentsServicePaginatedItemsResponse

# Class: ReplaceableIndentsServicePaginatedItemsResponse

Describes the response to a pagination items request

**`Generated`**

from message Scailo.ReplaceableIndentsServicePaginatedItemsResponse

## Hierarchy

- `Message`\<[`ReplaceableIndentsServicePaginatedItemsResponse`](ReplaceableIndentsServicePaginatedItemsResponse.md)\>

  ↳ **`ReplaceableIndentsServicePaginatedItemsResponse`**

## Table of contents

### Constructors

- [constructor](ReplaceableIndentsServicePaginatedItemsResponse.md#constructor)

### Properties

- [count](ReplaceableIndentsServicePaginatedItemsResponse.md#count)
- [offset](ReplaceableIndentsServicePaginatedItemsResponse.md#offset)
- [payload](ReplaceableIndentsServicePaginatedItemsResponse.md#payload)
- [total](ReplaceableIndentsServicePaginatedItemsResponse.md#total)
- [fields](ReplaceableIndentsServicePaginatedItemsResponse.md#fields)
- [runtime](ReplaceableIndentsServicePaginatedItemsResponse.md#runtime)
- [typeName](ReplaceableIndentsServicePaginatedItemsResponse.md#typename)

### Methods

- [clone](ReplaceableIndentsServicePaginatedItemsResponse.md#clone)
- [equals](ReplaceableIndentsServicePaginatedItemsResponse.md#equals)
- [fromBinary](ReplaceableIndentsServicePaginatedItemsResponse.md#frombinary)
- [fromJson](ReplaceableIndentsServicePaginatedItemsResponse.md#fromjson)
- [fromJsonString](ReplaceableIndentsServicePaginatedItemsResponse.md#fromjsonstring)
- [getType](ReplaceableIndentsServicePaginatedItemsResponse.md#gettype)
- [toBinary](ReplaceableIndentsServicePaginatedItemsResponse.md#tobinary)
- [toJSON](ReplaceableIndentsServicePaginatedItemsResponse.md#tojson)
- [toJson](ReplaceableIndentsServicePaginatedItemsResponse.md#tojson-1)
- [toJsonString](ReplaceableIndentsServicePaginatedItemsResponse.md#tojsonstring)
- [equals](ReplaceableIndentsServicePaginatedItemsResponse.md#equals-1)
- [fromBinary](ReplaceableIndentsServicePaginatedItemsResponse.md#frombinary-1)
- [fromJson](ReplaceableIndentsServicePaginatedItemsResponse.md#fromjson-1)
- [fromJsonString](ReplaceableIndentsServicePaginatedItemsResponse.md#fromjsonstring-1)

## Constructors

### constructor

• **new ReplaceableIndentsServicePaginatedItemsResponse**(`data?`): [`ReplaceableIndentsServicePaginatedItemsResponse`](ReplaceableIndentsServicePaginatedItemsResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ReplaceableIndentsServicePaginatedItemsResponse`](ReplaceableIndentsServicePaginatedItemsResponse.md)\> |

#### Returns

[`ReplaceableIndentsServicePaginatedItemsResponse`](ReplaceableIndentsServicePaginatedItemsResponse.md)

#### Overrides

Message\&lt;ReplaceableIndentsServicePaginatedItemsResponse\&gt;.constructor

#### Defined in

[src/replaceable_indents.scailo_pb.ts:1945](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/replaceable_indents.scailo_pb.ts#L1945)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records in this payload

**`Generated`**

from field: uint64 count = 1;

#### Defined in

[src/replaceable_indents.scailo_pb.ts:1922](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/replaceable_indents.scailo_pb.ts#L1922)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that has been offset before fetching the records. This is the same value that has been sent as part of the pagination request

**`Generated`**

from field: uint64 offset = 2;

#### Defined in

[src/replaceable_indents.scailo_pb.ts:1929](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/replaceable_indents.scailo_pb.ts#L1929)

___

### payload

• **payload**: [`ReplaceableIndentItem`](ReplaceableIndentItem.md)[] = `[]`

The list of records

**`Generated`**

from field: repeated Scailo.ReplaceableIndentItem payload = 4;

#### Defined in

[src/replaceable_indents.scailo_pb.ts:1943](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/replaceable_indents.scailo_pb.ts#L1943)

___

### total

• **total**: `bigint` = `protoInt64.zero`

The total number of records that are available

**`Generated`**

from field: uint64 total = 3;

#### Defined in

[src/replaceable_indents.scailo_pb.ts:1936](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/replaceable_indents.scailo_pb.ts#L1936)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/replaceable_indents.scailo_pb.ts:1952](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/replaceable_indents.scailo_pb.ts#L1952)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/replaceable_indents.scailo_pb.ts:1950](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/replaceable_indents.scailo_pb.ts#L1950)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ReplaceableIndentsServicePaginatedItemsResponse"``

#### Defined in

[src/replaceable_indents.scailo_pb.ts:1951](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/replaceable_indents.scailo_pb.ts#L1951)

## Methods

### clone

▸ **clone**(): [`ReplaceableIndentsServicePaginatedItemsResponse`](ReplaceableIndentsServicePaginatedItemsResponse.md)

Create a deep copy.

#### Returns

[`ReplaceableIndentsServicePaginatedItemsResponse`](ReplaceableIndentsServicePaginatedItemsResponse.md)

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
| `other` | `undefined` \| ``null`` \| [`ReplaceableIndentsServicePaginatedItemsResponse`](ReplaceableIndentsServicePaginatedItemsResponse.md) \| `PlainMessage`\<[`ReplaceableIndentsServicePaginatedItemsResponse`](ReplaceableIndentsServicePaginatedItemsResponse.md)\> |

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

▸ **getType**(): `MessageType`\<[`ReplaceableIndentsServicePaginatedItemsResponse`](ReplaceableIndentsServicePaginatedItemsResponse.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ReplaceableIndentsServicePaginatedItemsResponse`](ReplaceableIndentsServicePaginatedItemsResponse.md)\>

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
| `a` | `undefined` \| [`ReplaceableIndentsServicePaginatedItemsResponse`](ReplaceableIndentsServicePaginatedItemsResponse.md) \| `PlainMessage`\<[`ReplaceableIndentsServicePaginatedItemsResponse`](ReplaceableIndentsServicePaginatedItemsResponse.md)\> |
| `b` | `undefined` \| [`ReplaceableIndentsServicePaginatedItemsResponse`](ReplaceableIndentsServicePaginatedItemsResponse.md) \| `PlainMessage`\<[`ReplaceableIndentsServicePaginatedItemsResponse`](ReplaceableIndentsServicePaginatedItemsResponse.md)\> |

#### Returns

`boolean`

#### Defined in

[src/replaceable_indents.scailo_pb.ts:1971](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/replaceable_indents.scailo_pb.ts#L1971)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ReplaceableIndentsServicePaginatedItemsResponse`](ReplaceableIndentsServicePaginatedItemsResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ReplaceableIndentsServicePaginatedItemsResponse`](ReplaceableIndentsServicePaginatedItemsResponse.md)

#### Defined in

[src/replaceable_indents.scailo_pb.ts:1959](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/replaceable_indents.scailo_pb.ts#L1959)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ReplaceableIndentsServicePaginatedItemsResponse`](ReplaceableIndentsServicePaginatedItemsResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ReplaceableIndentsServicePaginatedItemsResponse`](ReplaceableIndentsServicePaginatedItemsResponse.md)

#### Defined in

[src/replaceable_indents.scailo_pb.ts:1963](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/replaceable_indents.scailo_pb.ts#L1963)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ReplaceableIndentsServicePaginatedItemsResponse`](ReplaceableIndentsServicePaginatedItemsResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ReplaceableIndentsServicePaginatedItemsResponse`](ReplaceableIndentsServicePaginatedItemsResponse.md)

#### Defined in

[src/replaceable_indents.scailo_pb.ts:1967](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/replaceable_indents.scailo_pb.ts#L1967)
