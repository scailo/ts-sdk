[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ReplaceableIndentsServicePaginationReq

# Class: ReplaceableIndentsServicePaginationReq

Describes a pagination request to retrieve records

**`Generated`**

from message Scailo.ReplaceableIndentsServicePaginationReq

## Hierarchy

- `Message`\<[`ReplaceableIndentsServicePaginationReq`](ReplaceableIndentsServicePaginationReq.md)\>

  ↳ **`ReplaceableIndentsServicePaginationReq`**

## Table of contents

### Constructors

- [constructor](ReplaceableIndentsServicePaginationReq.md#constructor)

### Properties

- [count](ReplaceableIndentsServicePaginationReq.md#count)
- [isActive](ReplaceableIndentsServicePaginationReq.md#isactive)
- [offset](ReplaceableIndentsServicePaginationReq.md#offset)
- [sortKey](ReplaceableIndentsServicePaginationReq.md#sortkey)
- [sortOrder](ReplaceableIndentsServicePaginationReq.md#sortorder)
- [status](ReplaceableIndentsServicePaginationReq.md#status)
- [fields](ReplaceableIndentsServicePaginationReq.md#fields)
- [runtime](ReplaceableIndentsServicePaginationReq.md#runtime)
- [typeName](ReplaceableIndentsServicePaginationReq.md#typename)

### Methods

- [clone](ReplaceableIndentsServicePaginationReq.md#clone)
- [equals](ReplaceableIndentsServicePaginationReq.md#equals)
- [fromBinary](ReplaceableIndentsServicePaginationReq.md#frombinary)
- [fromJson](ReplaceableIndentsServicePaginationReq.md#fromjson)
- [fromJsonString](ReplaceableIndentsServicePaginationReq.md#fromjsonstring)
- [getType](ReplaceableIndentsServicePaginationReq.md#gettype)
- [toBinary](ReplaceableIndentsServicePaginationReq.md#tobinary)
- [toJSON](ReplaceableIndentsServicePaginationReq.md#tojson)
- [toJson](ReplaceableIndentsServicePaginationReq.md#tojson-1)
- [toJsonString](ReplaceableIndentsServicePaginationReq.md#tojsonstring)
- [equals](ReplaceableIndentsServicePaginationReq.md#equals-1)
- [fromBinary](ReplaceableIndentsServicePaginationReq.md#frombinary-1)
- [fromJson](ReplaceableIndentsServicePaginationReq.md#fromjson-1)
- [fromJsonString](ReplaceableIndentsServicePaginationReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new ReplaceableIndentsServicePaginationReq**(`data?`): [`ReplaceableIndentsServicePaginationReq`](ReplaceableIndentsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ReplaceableIndentsServicePaginationReq`](ReplaceableIndentsServicePaginationReq.md)\> |

#### Returns

[`ReplaceableIndentsServicePaginationReq`](ReplaceableIndentsServicePaginationReq.md)

#### Overrides

Message\&lt;ReplaceableIndentsServicePaginationReq\&gt;.constructor

#### Defined in

[src/replaceable_indents.scailo_pb.ts:1205](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/replaceable_indents.scailo_pb.ts#L1205)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

Number of records to return per page.

**`Example`**

```ts
50
```

**`Regex`**

^[1-9][0-9]*$

**`Format`**

Must be a strictly positive integer (1 or greater).

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/replaceable_indents.scailo_pb.ts:1158](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/replaceable_indents.scailo_pb.ts#L1158)

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

**`Optional`**

**`Description`**

Filter by active status. If `true`, then returns only active records. If `false`, then returns only inactive records.

**`Example`**

```ts
ANY
```

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

[src/replaceable_indents.scailo_pb.ts:1142](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/replaceable_indents.scailo_pb.ts#L1142)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Number of records to skip (offset) for pagination.

**`Example`**

```ts
0
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

[src/replaceable_indents.scailo_pb.ts:1174](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/replaceable_indents.scailo_pb.ts#L1174)

___

### sortKey

• **sortKey**: [`REPLACEABLE_INDENT_SORT_KEY`](../enums/REPLACEABLE_INDENT_SORT_KEY.md) = `REPLACEABLE_INDENT_SORT_KEY.REPLACEABLE_INDENT_SORT_KEY_ID_UNSPECIFIED`

**`Optional`**

**`Description`**

The specific field key to sort the results by.

**`Generated`**

from field: Scailo.REPLACEABLE_INDENT_SORT_KEY sort_key = 5;

#### Defined in

[src/replaceable_indents.scailo_pb.ts:1196](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/replaceable_indents.scailo_pb.ts#L1196)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

**`Optional`**

**`Description`**

Sort direction.

**`Example`**

```ts
DESCENDING
```

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

[src/replaceable_indents.scailo_pb.ts:1186](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/replaceable_indents.scailo_pb.ts#L1186)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

The status of this replaceable indent

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 6;

#### Defined in

[src/replaceable_indents.scailo_pb.ts:1203](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/replaceable_indents.scailo_pb.ts#L1203)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/replaceable_indents.scailo_pb.ts:1212](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/replaceable_indents.scailo_pb.ts#L1212)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/replaceable_indents.scailo_pb.ts:1210](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/replaceable_indents.scailo_pb.ts#L1210)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ReplaceableIndentsServicePaginationReq"``

#### Defined in

[src/replaceable_indents.scailo_pb.ts:1211](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/replaceable_indents.scailo_pb.ts#L1211)

## Methods

### clone

▸ **clone**(): [`ReplaceableIndentsServicePaginationReq`](ReplaceableIndentsServicePaginationReq.md)

Create a deep copy.

#### Returns

[`ReplaceableIndentsServicePaginationReq`](ReplaceableIndentsServicePaginationReq.md)

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
| `other` | `undefined` \| ``null`` \| [`ReplaceableIndentsServicePaginationReq`](ReplaceableIndentsServicePaginationReq.md) \| `PlainMessage`\<[`ReplaceableIndentsServicePaginationReq`](ReplaceableIndentsServicePaginationReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`ReplaceableIndentsServicePaginationReq`](ReplaceableIndentsServicePaginationReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ReplaceableIndentsServicePaginationReq`](ReplaceableIndentsServicePaginationReq.md)\>

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
| `a` | `undefined` \| [`ReplaceableIndentsServicePaginationReq`](ReplaceableIndentsServicePaginationReq.md) \| `PlainMessage`\<[`ReplaceableIndentsServicePaginationReq`](ReplaceableIndentsServicePaginationReq.md)\> |
| `b` | `undefined` \| [`ReplaceableIndentsServicePaginationReq`](ReplaceableIndentsServicePaginationReq.md) \| `PlainMessage`\<[`ReplaceableIndentsServicePaginationReq`](ReplaceableIndentsServicePaginationReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/replaceable_indents.scailo_pb.ts:1233](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/replaceable_indents.scailo_pb.ts#L1233)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ReplaceableIndentsServicePaginationReq`](ReplaceableIndentsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ReplaceableIndentsServicePaginationReq`](ReplaceableIndentsServicePaginationReq.md)

#### Defined in

[src/replaceable_indents.scailo_pb.ts:1221](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/replaceable_indents.scailo_pb.ts#L1221)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ReplaceableIndentsServicePaginationReq`](ReplaceableIndentsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ReplaceableIndentsServicePaginationReq`](ReplaceableIndentsServicePaginationReq.md)

#### Defined in

[src/replaceable_indents.scailo_pb.ts:1225](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/replaceable_indents.scailo_pb.ts#L1225)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ReplaceableIndentsServicePaginationReq`](ReplaceableIndentsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ReplaceableIndentsServicePaginationReq`](ReplaceableIndentsServicePaginationReq.md)

#### Defined in

[src/replaceable_indents.scailo_pb.ts:1229](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/replaceable_indents.scailo_pb.ts#L1229)
