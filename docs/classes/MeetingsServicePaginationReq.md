[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / MeetingsServicePaginationReq

# Class: MeetingsServicePaginationReq

Describes a pagination request to retrieve records

**`Generated`**

from message Scailo.MeetingsServicePaginationReq

## Hierarchy

- `Message`\<[`MeetingsServicePaginationReq`](MeetingsServicePaginationReq.md)\>

  ↳ **`MeetingsServicePaginationReq`**

## Table of contents

### Constructors

- [constructor](MeetingsServicePaginationReq.md#constructor)

### Properties

- [count](MeetingsServicePaginationReq.md#count)
- [isActive](MeetingsServicePaginationReq.md#isactive)
- [offset](MeetingsServicePaginationReq.md#offset)
- [sortKey](MeetingsServicePaginationReq.md#sortkey)
- [sortOrder](MeetingsServicePaginationReq.md#sortorder)
- [status](MeetingsServicePaginationReq.md#status)
- [fields](MeetingsServicePaginationReq.md#fields)
- [runtime](MeetingsServicePaginationReq.md#runtime)
- [typeName](MeetingsServicePaginationReq.md#typename)

### Methods

- [clone](MeetingsServicePaginationReq.md#clone)
- [equals](MeetingsServicePaginationReq.md#equals)
- [fromBinary](MeetingsServicePaginationReq.md#frombinary)
- [fromJson](MeetingsServicePaginationReq.md#fromjson)
- [fromJsonString](MeetingsServicePaginationReq.md#fromjsonstring)
- [getType](MeetingsServicePaginationReq.md#gettype)
- [toBinary](MeetingsServicePaginationReq.md#tobinary)
- [toJSON](MeetingsServicePaginationReq.md#tojson)
- [toJson](MeetingsServicePaginationReq.md#tojson-1)
- [toJsonString](MeetingsServicePaginationReq.md#tojsonstring)
- [equals](MeetingsServicePaginationReq.md#equals-1)
- [fromBinary](MeetingsServicePaginationReq.md#frombinary-1)
- [fromJson](MeetingsServicePaginationReq.md#fromjson-1)
- [fromJsonString](MeetingsServicePaginationReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new MeetingsServicePaginationReq**(`data?`): [`MeetingsServicePaginationReq`](MeetingsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`MeetingsServicePaginationReq`](MeetingsServicePaginationReq.md)\> |

#### Returns

[`MeetingsServicePaginationReq`](MeetingsServicePaginationReq.md)

#### Overrides

Message\&lt;MeetingsServicePaginationReq\&gt;.constructor

#### Defined in

[src/meetings.scailo_pb.ts:826](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/meetings.scailo_pb.ts#L826)

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

[src/meetings.scailo_pb.ts:779](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/meetings.scailo_pb.ts#L779)

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

[src/meetings.scailo_pb.ts:763](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/meetings.scailo_pb.ts#L763)

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

[src/meetings.scailo_pb.ts:795](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/meetings.scailo_pb.ts#L795)

___

### sortKey

• **sortKey**: [`MEETING_SORT_KEY`](../enums/MEETING_SORT_KEY.md) = `MEETING_SORT_KEY.MEETING_SORT_KEY_ID_UNSPECIFIED`

**`Optional`**

**`Description`**

The specific field key to sort the results by.

**`Generated`**

from field: Scailo.MEETING_SORT_KEY sort_key = 5;

#### Defined in

[src/meetings.scailo_pb.ts:817](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/meetings.scailo_pb.ts#L817)

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

[src/meetings.scailo_pb.ts:807](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/meetings.scailo_pb.ts#L807)

___

### status

• **status**: [`MEETING_LIFECYCLE`](../enums/MEETING_LIFECYCLE.md) = `MEETING_LIFECYCLE.MEETING_LIFECYCLE_ANY_UNSPECIFIED`

The status of this meeting

**`Generated`**

from field: Scailo.MEETING_LIFECYCLE status = 6;

#### Defined in

[src/meetings.scailo_pb.ts:824](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/meetings.scailo_pb.ts#L824)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/meetings.scailo_pb.ts:833](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/meetings.scailo_pb.ts#L833)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/meetings.scailo_pb.ts:831](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/meetings.scailo_pb.ts#L831)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.MeetingsServicePaginationReq"``

#### Defined in

[src/meetings.scailo_pb.ts:832](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/meetings.scailo_pb.ts#L832)

## Methods

### clone

▸ **clone**(): [`MeetingsServicePaginationReq`](MeetingsServicePaginationReq.md)

Create a deep copy.

#### Returns

[`MeetingsServicePaginationReq`](MeetingsServicePaginationReq.md)

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
| `other` | `undefined` \| ``null`` \| [`MeetingsServicePaginationReq`](MeetingsServicePaginationReq.md) \| `PlainMessage`\<[`MeetingsServicePaginationReq`](MeetingsServicePaginationReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`MeetingsServicePaginationReq`](MeetingsServicePaginationReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`MeetingsServicePaginationReq`](MeetingsServicePaginationReq.md)\>

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
| `a` | `undefined` \| [`MeetingsServicePaginationReq`](MeetingsServicePaginationReq.md) \| `PlainMessage`\<[`MeetingsServicePaginationReq`](MeetingsServicePaginationReq.md)\> |
| `b` | `undefined` \| [`MeetingsServicePaginationReq`](MeetingsServicePaginationReq.md) \| `PlainMessage`\<[`MeetingsServicePaginationReq`](MeetingsServicePaginationReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/meetings.scailo_pb.ts:854](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/meetings.scailo_pb.ts#L854)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`MeetingsServicePaginationReq`](MeetingsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`MeetingsServicePaginationReq`](MeetingsServicePaginationReq.md)

#### Defined in

[src/meetings.scailo_pb.ts:842](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/meetings.scailo_pb.ts#L842)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`MeetingsServicePaginationReq`](MeetingsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`MeetingsServicePaginationReq`](MeetingsServicePaginationReq.md)

#### Defined in

[src/meetings.scailo_pb.ts:846](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/meetings.scailo_pb.ts#L846)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`MeetingsServicePaginationReq`](MeetingsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`MeetingsServicePaginationReq`](MeetingsServicePaginationReq.md)

#### Defined in

[src/meetings.scailo_pb.ts:850](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/meetings.scailo_pb.ts#L850)
