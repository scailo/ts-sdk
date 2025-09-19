[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / InfrastructuresServicePaginationReq

# Class: InfrastructuresServicePaginationReq

Describes a pagination request to retrieve records

**`Generated`**

from message Scailo.InfrastructuresServicePaginationReq

## Hierarchy

- `Message`\<[`InfrastructuresServicePaginationReq`](InfrastructuresServicePaginationReq.md)\>

  ↳ **`InfrastructuresServicePaginationReq`**

## Table of contents

### Constructors

- [constructor](InfrastructuresServicePaginationReq.md#constructor)

### Properties

- [count](InfrastructuresServicePaginationReq.md#count)
- [isActive](InfrastructuresServicePaginationReq.md#isactive)
- [offset](InfrastructuresServicePaginationReq.md#offset)
- [sortKey](InfrastructuresServicePaginationReq.md#sortkey)
- [sortOrder](InfrastructuresServicePaginationReq.md#sortorder)
- [status](InfrastructuresServicePaginationReq.md#status)
- [fields](InfrastructuresServicePaginationReq.md#fields)
- [runtime](InfrastructuresServicePaginationReq.md#runtime)
- [typeName](InfrastructuresServicePaginationReq.md#typename)

### Methods

- [clone](InfrastructuresServicePaginationReq.md#clone)
- [equals](InfrastructuresServicePaginationReq.md#equals)
- [fromBinary](InfrastructuresServicePaginationReq.md#frombinary)
- [fromJson](InfrastructuresServicePaginationReq.md#fromjson)
- [fromJsonString](InfrastructuresServicePaginationReq.md#fromjsonstring)
- [getType](InfrastructuresServicePaginationReq.md#gettype)
- [toBinary](InfrastructuresServicePaginationReq.md#tobinary)
- [toJSON](InfrastructuresServicePaginationReq.md#tojson)
- [toJson](InfrastructuresServicePaginationReq.md#tojson-1)
- [toJsonString](InfrastructuresServicePaginationReq.md#tojsonstring)
- [equals](InfrastructuresServicePaginationReq.md#equals-1)
- [fromBinary](InfrastructuresServicePaginationReq.md#frombinary-1)
- [fromJson](InfrastructuresServicePaginationReq.md#fromjson-1)
- [fromJsonString](InfrastructuresServicePaginationReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new InfrastructuresServicePaginationReq**(`data?`): [`InfrastructuresServicePaginationReq`](InfrastructuresServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`InfrastructuresServicePaginationReq`](InfrastructuresServicePaginationReq.md)\> |

#### Returns

[`InfrastructuresServicePaginationReq`](InfrastructuresServicePaginationReq.md)

#### Overrides

Message\&lt;InfrastructuresServicePaginationReq\&gt;.constructor

#### Defined in

[src/infrastructures.scailo_pb.ts:816](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/infrastructures.scailo_pb.ts#L816)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/infrastructures.scailo_pb.ts:786](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/infrastructures.scailo_pb.ts#L786)

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

[src/infrastructures.scailo_pb.ts:779](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/infrastructures.scailo_pb.ts#L779)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

[src/infrastructures.scailo_pb.ts:793](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/infrastructures.scailo_pb.ts#L793)

___

### sortKey

• **sortKey**: [`INVENTORY_SORT_KEY`](../enums/INVENTORY_SORT_KEY.md) = `INVENTORY_SORT_KEY.INVENTORY_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.INVENTORY_SORT_KEY sort_key = 5;

#### Defined in

[src/infrastructures.scailo_pb.ts:807](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/infrastructures.scailo_pb.ts#L807)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

[src/infrastructures.scailo_pb.ts:800](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/infrastructures.scailo_pb.ts#L800)

___

### status

• **status**: [`INVENTORY_LIFECYCLE`](../enums/INVENTORY_LIFECYCLE.md) = `INVENTORY_LIFECYCLE.INVENTORY_LIFECYCLE_ANY_UNSPECIFIED`

The status of this infrastructure

**`Generated`**

from field: Scailo.INVENTORY_LIFECYCLE status = 6;

#### Defined in

[src/infrastructures.scailo_pb.ts:814](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/infrastructures.scailo_pb.ts#L814)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/infrastructures.scailo_pb.ts:823](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/infrastructures.scailo_pb.ts#L823)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/infrastructures.scailo_pb.ts:821](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/infrastructures.scailo_pb.ts#L821)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.InfrastructuresServicePaginationReq"``

#### Defined in

[src/infrastructures.scailo_pb.ts:822](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/infrastructures.scailo_pb.ts#L822)

## Methods

### clone

▸ **clone**(): [`InfrastructuresServicePaginationReq`](InfrastructuresServicePaginationReq.md)

Create a deep copy.

#### Returns

[`InfrastructuresServicePaginationReq`](InfrastructuresServicePaginationReq.md)

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
| `other` | `undefined` \| ``null`` \| [`InfrastructuresServicePaginationReq`](InfrastructuresServicePaginationReq.md) \| `PlainMessage`\<[`InfrastructuresServicePaginationReq`](InfrastructuresServicePaginationReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`InfrastructuresServicePaginationReq`](InfrastructuresServicePaginationReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`InfrastructuresServicePaginationReq`](InfrastructuresServicePaginationReq.md)\>

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
| `a` | `undefined` \| [`InfrastructuresServicePaginationReq`](InfrastructuresServicePaginationReq.md) \| `PlainMessage`\<[`InfrastructuresServicePaginationReq`](InfrastructuresServicePaginationReq.md)\> |
| `b` | `undefined` \| [`InfrastructuresServicePaginationReq`](InfrastructuresServicePaginationReq.md) \| `PlainMessage`\<[`InfrastructuresServicePaginationReq`](InfrastructuresServicePaginationReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/infrastructures.scailo_pb.ts:844](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/infrastructures.scailo_pb.ts#L844)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`InfrastructuresServicePaginationReq`](InfrastructuresServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`InfrastructuresServicePaginationReq`](InfrastructuresServicePaginationReq.md)

#### Defined in

[src/infrastructures.scailo_pb.ts:832](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/infrastructures.scailo_pb.ts#L832)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`InfrastructuresServicePaginationReq`](InfrastructuresServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`InfrastructuresServicePaginationReq`](InfrastructuresServicePaginationReq.md)

#### Defined in

[src/infrastructures.scailo_pb.ts:836](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/infrastructures.scailo_pb.ts#L836)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`InfrastructuresServicePaginationReq`](InfrastructuresServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`InfrastructuresServicePaginationReq`](InfrastructuresServicePaginationReq.md)

#### Defined in

[src/infrastructures.scailo_pb.ts:840](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/infrastructures.scailo_pb.ts#L840)
