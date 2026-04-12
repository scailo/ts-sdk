[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / NotesServicePaginationReq

# Class: NotesServicePaginationReq

Describes a pagination request to retrieve records

**`Generated`**

from message Scailo.NotesServicePaginationReq

## Hierarchy

- `Message`\<[`NotesServicePaginationReq`](NotesServicePaginationReq.md)\>

  ↳ **`NotesServicePaginationReq`**

## Table of contents

### Constructors

- [constructor](NotesServicePaginationReq.md#constructor)

### Properties

- [count](NotesServicePaginationReq.md#count)
- [isActive](NotesServicePaginationReq.md#isactive)
- [offset](NotesServicePaginationReq.md#offset)
- [sortKey](NotesServicePaginationReq.md#sortkey)
- [sortOrder](NotesServicePaginationReq.md#sortorder)
- [status](NotesServicePaginationReq.md#status)
- [fields](NotesServicePaginationReq.md#fields)
- [runtime](NotesServicePaginationReq.md#runtime)
- [typeName](NotesServicePaginationReq.md#typename)

### Methods

- [clone](NotesServicePaginationReq.md#clone)
- [equals](NotesServicePaginationReq.md#equals)
- [fromBinary](NotesServicePaginationReq.md#frombinary)
- [fromJson](NotesServicePaginationReq.md#fromjson)
- [fromJsonString](NotesServicePaginationReq.md#fromjsonstring)
- [getType](NotesServicePaginationReq.md#gettype)
- [toBinary](NotesServicePaginationReq.md#tobinary)
- [toJSON](NotesServicePaginationReq.md#tojson)
- [toJson](NotesServicePaginationReq.md#tojson-1)
- [toJsonString](NotesServicePaginationReq.md#tojsonstring)
- [equals](NotesServicePaginationReq.md#equals-1)
- [fromBinary](NotesServicePaginationReq.md#frombinary-1)
- [fromJson](NotesServicePaginationReq.md#fromjson-1)
- [fromJsonString](NotesServicePaginationReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new NotesServicePaginationReq**(`data?`): [`NotesServicePaginationReq`](NotesServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`NotesServicePaginationReq`](NotesServicePaginationReq.md)\> |

#### Returns

[`NotesServicePaginationReq`](NotesServicePaginationReq.md)

#### Overrides

Message\&lt;NotesServicePaginationReq\&gt;.constructor

#### Defined in

[src/notes.scailo_pb.ts:699](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/notes.scailo_pb.ts#L699)

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

[src/notes.scailo_pb.ts:652](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/notes.scailo_pb.ts#L652)

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

[src/notes.scailo_pb.ts:636](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/notes.scailo_pb.ts#L636)

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

[src/notes.scailo_pb.ts:668](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/notes.scailo_pb.ts#L668)

___

### sortKey

• **sortKey**: [`NOTE_SORT_KEY`](../enums/NOTE_SORT_KEY.md) = `NOTE_SORT_KEY.NOTE_SORT_KEY_ID_UNSPECIFIED`

**`Optional`**

**`Description`**

The specific field key to sort the results by.

**`Generated`**

from field: Scailo.NOTE_SORT_KEY sort_key = 5;

#### Defined in

[src/notes.scailo_pb.ts:690](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/notes.scailo_pb.ts#L690)

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

[src/notes.scailo_pb.ts:680](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/notes.scailo_pb.ts#L680)

___

### status

• **status**: [`NOTE_LIFECYCLE`](../enums/NOTE_LIFECYCLE.md) = `NOTE_LIFECYCLE.NOTE_LIFECYCLE_ANY_UNSPECIFIED`

The status of this note

**`Generated`**

from field: Scailo.NOTE_LIFECYCLE status = 6;

#### Defined in

[src/notes.scailo_pb.ts:697](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/notes.scailo_pb.ts#L697)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/notes.scailo_pb.ts:706](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/notes.scailo_pb.ts#L706)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/notes.scailo_pb.ts:704](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/notes.scailo_pb.ts#L704)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.NotesServicePaginationReq"``

#### Defined in

[src/notes.scailo_pb.ts:705](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/notes.scailo_pb.ts#L705)

## Methods

### clone

▸ **clone**(): [`NotesServicePaginationReq`](NotesServicePaginationReq.md)

Create a deep copy.

#### Returns

[`NotesServicePaginationReq`](NotesServicePaginationReq.md)

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
| `other` | `undefined` \| ``null`` \| [`NotesServicePaginationReq`](NotesServicePaginationReq.md) \| `PlainMessage`\<[`NotesServicePaginationReq`](NotesServicePaginationReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`NotesServicePaginationReq`](NotesServicePaginationReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`NotesServicePaginationReq`](NotesServicePaginationReq.md)\>

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
| `a` | `undefined` \| [`NotesServicePaginationReq`](NotesServicePaginationReq.md) \| `PlainMessage`\<[`NotesServicePaginationReq`](NotesServicePaginationReq.md)\> |
| `b` | `undefined` \| [`NotesServicePaginationReq`](NotesServicePaginationReq.md) \| `PlainMessage`\<[`NotesServicePaginationReq`](NotesServicePaginationReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/notes.scailo_pb.ts:727](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/notes.scailo_pb.ts#L727)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`NotesServicePaginationReq`](NotesServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`NotesServicePaginationReq`](NotesServicePaginationReq.md)

#### Defined in

[src/notes.scailo_pb.ts:715](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/notes.scailo_pb.ts#L715)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`NotesServicePaginationReq`](NotesServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`NotesServicePaginationReq`](NotesServicePaginationReq.md)

#### Defined in

[src/notes.scailo_pb.ts:719](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/notes.scailo_pb.ts#L719)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`NotesServicePaginationReq`](NotesServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`NotesServicePaginationReq`](NotesServicePaginationReq.md)

#### Defined in

[src/notes.scailo_pb.ts:723](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/notes.scailo_pb.ts#L723)
