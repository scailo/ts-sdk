[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ComponentsServicePaginationReq

# Class: ComponentsServicePaginationReq

Describes a pagination request to retrieve records

**`Generated`**

from message Scailo.ComponentsServicePaginationReq

## Hierarchy

- `Message`\<[`ComponentsServicePaginationReq`](ComponentsServicePaginationReq.md)\>

  ↳ **`ComponentsServicePaginationReq`**

## Table of contents

### Constructors

- [constructor](ComponentsServicePaginationReq.md#constructor)

### Properties

- [count](ComponentsServicePaginationReq.md#count)
- [isActive](ComponentsServicePaginationReq.md#isactive)
- [offset](ComponentsServicePaginationReq.md#offset)
- [sortKey](ComponentsServicePaginationReq.md#sortkey)
- [sortOrder](ComponentsServicePaginationReq.md#sortorder)
- [status](ComponentsServicePaginationReq.md#status)
- [fields](ComponentsServicePaginationReq.md#fields)
- [runtime](ComponentsServicePaginationReq.md#runtime)
- [typeName](ComponentsServicePaginationReq.md#typename)

### Methods

- [clone](ComponentsServicePaginationReq.md#clone)
- [equals](ComponentsServicePaginationReq.md#equals)
- [fromBinary](ComponentsServicePaginationReq.md#frombinary)
- [fromJson](ComponentsServicePaginationReq.md#fromjson)
- [fromJsonString](ComponentsServicePaginationReq.md#fromjsonstring)
- [getType](ComponentsServicePaginationReq.md#gettype)
- [toBinary](ComponentsServicePaginationReq.md#tobinary)
- [toJSON](ComponentsServicePaginationReq.md#tojson)
- [toJson](ComponentsServicePaginationReq.md#tojson-1)
- [toJsonString](ComponentsServicePaginationReq.md#tojsonstring)
- [equals](ComponentsServicePaginationReq.md#equals-1)
- [fromBinary](ComponentsServicePaginationReq.md#frombinary-1)
- [fromJson](ComponentsServicePaginationReq.md#fromjson-1)
- [fromJsonString](ComponentsServicePaginationReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new ComponentsServicePaginationReq**(`data?`): [`ComponentsServicePaginationReq`](ComponentsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ComponentsServicePaginationReq`](ComponentsServicePaginationReq.md)\> |

#### Returns

[`ComponentsServicePaginationReq`](ComponentsServicePaginationReq.md)

#### Overrides

Message\&lt;ComponentsServicePaginationReq\&gt;.constructor

#### Defined in

[src/components.scailo_pb.ts:832](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/components.scailo_pb.ts#L832)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/components.scailo_pb.ts:802](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/components.scailo_pb.ts#L802)

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

[src/components.scailo_pb.ts:795](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/components.scailo_pb.ts#L795)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

[src/components.scailo_pb.ts:809](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/components.scailo_pb.ts#L809)

___

### sortKey

• **sortKey**: [`INVENTORY_SORT_KEY`](../enums/INVENTORY_SORT_KEY.md) = `INVENTORY_SORT_KEY.INVENTORY_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.INVENTORY_SORT_KEY sort_key = 5;

#### Defined in

[src/components.scailo_pb.ts:823](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/components.scailo_pb.ts#L823)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

[src/components.scailo_pb.ts:816](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/components.scailo_pb.ts#L816)

___

### status

• **status**: [`INVENTORY_LIFECYCLE`](../enums/INVENTORY_LIFECYCLE.md) = `INVENTORY_LIFECYCLE.INVENTORY_LIFECYCLE_ANY_UNSPECIFIED`

The status of this component

**`Generated`**

from field: Scailo.INVENTORY_LIFECYCLE status = 6;

#### Defined in

[src/components.scailo_pb.ts:830](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/components.scailo_pb.ts#L830)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/components.scailo_pb.ts:839](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/components.scailo_pb.ts#L839)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/components.scailo_pb.ts:837](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/components.scailo_pb.ts#L837)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ComponentsServicePaginationReq"``

#### Defined in

[src/components.scailo_pb.ts:838](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/components.scailo_pb.ts#L838)

## Methods

### clone

▸ **clone**(): [`ComponentsServicePaginationReq`](ComponentsServicePaginationReq.md)

Create a deep copy.

#### Returns

[`ComponentsServicePaginationReq`](ComponentsServicePaginationReq.md)

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
| `other` | `undefined` \| ``null`` \| [`ComponentsServicePaginationReq`](ComponentsServicePaginationReq.md) \| `PlainMessage`\<[`ComponentsServicePaginationReq`](ComponentsServicePaginationReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`ComponentsServicePaginationReq`](ComponentsServicePaginationReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ComponentsServicePaginationReq`](ComponentsServicePaginationReq.md)\>

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
| `a` | `undefined` \| [`ComponentsServicePaginationReq`](ComponentsServicePaginationReq.md) \| `PlainMessage`\<[`ComponentsServicePaginationReq`](ComponentsServicePaginationReq.md)\> |
| `b` | `undefined` \| [`ComponentsServicePaginationReq`](ComponentsServicePaginationReq.md) \| `PlainMessage`\<[`ComponentsServicePaginationReq`](ComponentsServicePaginationReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/components.scailo_pb.ts:860](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/components.scailo_pb.ts#L860)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ComponentsServicePaginationReq`](ComponentsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ComponentsServicePaginationReq`](ComponentsServicePaginationReq.md)

#### Defined in

[src/components.scailo_pb.ts:848](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/components.scailo_pb.ts#L848)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ComponentsServicePaginationReq`](ComponentsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ComponentsServicePaginationReq`](ComponentsServicePaginationReq.md)

#### Defined in

[src/components.scailo_pb.ts:852](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/components.scailo_pb.ts#L852)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ComponentsServicePaginationReq`](ComponentsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ComponentsServicePaginationReq`](ComponentsServicePaginationReq.md)

#### Defined in

[src/components.scailo_pb.ts:856](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/components.scailo_pb.ts#L856)
