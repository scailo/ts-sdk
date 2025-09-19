[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / FeedstocksServicePaginationReq

# Class: FeedstocksServicePaginationReq

Describes a pagination request to retrieve records

**`Generated`**

from message Scailo.FeedstocksServicePaginationReq

## Hierarchy

- `Message`\<[`FeedstocksServicePaginationReq`](FeedstocksServicePaginationReq.md)\>

  ↳ **`FeedstocksServicePaginationReq`**

## Table of contents

### Constructors

- [constructor](FeedstocksServicePaginationReq.md#constructor)

### Properties

- [count](FeedstocksServicePaginationReq.md#count)
- [isActive](FeedstocksServicePaginationReq.md#isactive)
- [offset](FeedstocksServicePaginationReq.md#offset)
- [sortKey](FeedstocksServicePaginationReq.md#sortkey)
- [sortOrder](FeedstocksServicePaginationReq.md#sortorder)
- [status](FeedstocksServicePaginationReq.md#status)
- [fields](FeedstocksServicePaginationReq.md#fields)
- [runtime](FeedstocksServicePaginationReq.md#runtime)
- [typeName](FeedstocksServicePaginationReq.md#typename)

### Methods

- [clone](FeedstocksServicePaginationReq.md#clone)
- [equals](FeedstocksServicePaginationReq.md#equals)
- [fromBinary](FeedstocksServicePaginationReq.md#frombinary)
- [fromJson](FeedstocksServicePaginationReq.md#fromjson)
- [fromJsonString](FeedstocksServicePaginationReq.md#fromjsonstring)
- [getType](FeedstocksServicePaginationReq.md#gettype)
- [toBinary](FeedstocksServicePaginationReq.md#tobinary)
- [toJSON](FeedstocksServicePaginationReq.md#tojson)
- [toJson](FeedstocksServicePaginationReq.md#tojson-1)
- [toJsonString](FeedstocksServicePaginationReq.md#tojsonstring)
- [equals](FeedstocksServicePaginationReq.md#equals-1)
- [fromBinary](FeedstocksServicePaginationReq.md#frombinary-1)
- [fromJson](FeedstocksServicePaginationReq.md#fromjson-1)
- [fromJsonString](FeedstocksServicePaginationReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new FeedstocksServicePaginationReq**(`data?`): [`FeedstocksServicePaginationReq`](FeedstocksServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`FeedstocksServicePaginationReq`](FeedstocksServicePaginationReq.md)\> |

#### Returns

[`FeedstocksServicePaginationReq`](FeedstocksServicePaginationReq.md)

#### Overrides

Message\&lt;FeedstocksServicePaginationReq\&gt;.constructor

#### Defined in

[src/feedstocks.scailo_pb.ts:816](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/feedstocks.scailo_pb.ts#L816)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/feedstocks.scailo_pb.ts:786](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/feedstocks.scailo_pb.ts#L786)

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

[src/feedstocks.scailo_pb.ts:779](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/feedstocks.scailo_pb.ts#L779)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

[src/feedstocks.scailo_pb.ts:793](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/feedstocks.scailo_pb.ts#L793)

___

### sortKey

• **sortKey**: [`INVENTORY_SORT_KEY`](../enums/INVENTORY_SORT_KEY.md) = `INVENTORY_SORT_KEY.INVENTORY_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.INVENTORY_SORT_KEY sort_key = 5;

#### Defined in

[src/feedstocks.scailo_pb.ts:807](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/feedstocks.scailo_pb.ts#L807)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

[src/feedstocks.scailo_pb.ts:800](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/feedstocks.scailo_pb.ts#L800)

___

### status

• **status**: [`INVENTORY_LIFECYCLE`](../enums/INVENTORY_LIFECYCLE.md) = `INVENTORY_LIFECYCLE.INVENTORY_LIFECYCLE_ANY_UNSPECIFIED`

The status of this feedstock

**`Generated`**

from field: Scailo.INVENTORY_LIFECYCLE status = 6;

#### Defined in

[src/feedstocks.scailo_pb.ts:814](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/feedstocks.scailo_pb.ts#L814)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/feedstocks.scailo_pb.ts:823](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/feedstocks.scailo_pb.ts#L823)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/feedstocks.scailo_pb.ts:821](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/feedstocks.scailo_pb.ts#L821)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.FeedstocksServicePaginationReq"``

#### Defined in

[src/feedstocks.scailo_pb.ts:822](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/feedstocks.scailo_pb.ts#L822)

## Methods

### clone

▸ **clone**(): [`FeedstocksServicePaginationReq`](FeedstocksServicePaginationReq.md)

Create a deep copy.

#### Returns

[`FeedstocksServicePaginationReq`](FeedstocksServicePaginationReq.md)

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
| `other` | `undefined` \| ``null`` \| [`FeedstocksServicePaginationReq`](FeedstocksServicePaginationReq.md) \| `PlainMessage`\<[`FeedstocksServicePaginationReq`](FeedstocksServicePaginationReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`FeedstocksServicePaginationReq`](FeedstocksServicePaginationReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`FeedstocksServicePaginationReq`](FeedstocksServicePaginationReq.md)\>

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
| `a` | `undefined` \| [`FeedstocksServicePaginationReq`](FeedstocksServicePaginationReq.md) \| `PlainMessage`\<[`FeedstocksServicePaginationReq`](FeedstocksServicePaginationReq.md)\> |
| `b` | `undefined` \| [`FeedstocksServicePaginationReq`](FeedstocksServicePaginationReq.md) \| `PlainMessage`\<[`FeedstocksServicePaginationReq`](FeedstocksServicePaginationReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/feedstocks.scailo_pb.ts:844](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/feedstocks.scailo_pb.ts#L844)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`FeedstocksServicePaginationReq`](FeedstocksServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`FeedstocksServicePaginationReq`](FeedstocksServicePaginationReq.md)

#### Defined in

[src/feedstocks.scailo_pb.ts:832](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/feedstocks.scailo_pb.ts#L832)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`FeedstocksServicePaginationReq`](FeedstocksServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`FeedstocksServicePaginationReq`](FeedstocksServicePaginationReq.md)

#### Defined in

[src/feedstocks.scailo_pb.ts:836](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/feedstocks.scailo_pb.ts#L836)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`FeedstocksServicePaginationReq`](FeedstocksServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`FeedstocksServicePaginationReq`](FeedstocksServicePaginationReq.md)

#### Defined in

[src/feedstocks.scailo_pb.ts:840](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/feedstocks.scailo_pb.ts#L840)
