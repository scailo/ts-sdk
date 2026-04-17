[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / CreditNotesServicePaginationReq

# Class: CreditNotesServicePaginationReq

Describes a pagination request to retrieve records

**`Generated`**

from message Scailo.CreditNotesServicePaginationReq

## Hierarchy

- `Message`\<[`CreditNotesServicePaginationReq`](CreditNotesServicePaginationReq.md)\>

  ↳ **`CreditNotesServicePaginationReq`**

## Table of contents

### Constructors

- [constructor](CreditNotesServicePaginationReq.md#constructor)

### Properties

- [count](CreditNotesServicePaginationReq.md#count)
- [isActive](CreditNotesServicePaginationReq.md#isactive)
- [offset](CreditNotesServicePaginationReq.md#offset)
- [sortKey](CreditNotesServicePaginationReq.md#sortkey)
- [sortOrder](CreditNotesServicePaginationReq.md#sortorder)
- [status](CreditNotesServicePaginationReq.md#status)
- [fields](CreditNotesServicePaginationReq.md#fields)
- [runtime](CreditNotesServicePaginationReq.md#runtime)
- [typeName](CreditNotesServicePaginationReq.md#typename)

### Methods

- [clone](CreditNotesServicePaginationReq.md#clone)
- [equals](CreditNotesServicePaginationReq.md#equals)
- [fromBinary](CreditNotesServicePaginationReq.md#frombinary)
- [fromJson](CreditNotesServicePaginationReq.md#fromjson)
- [fromJsonString](CreditNotesServicePaginationReq.md#fromjsonstring)
- [getType](CreditNotesServicePaginationReq.md#gettype)
- [toBinary](CreditNotesServicePaginationReq.md#tobinary)
- [toJSON](CreditNotesServicePaginationReq.md#tojson)
- [toJson](CreditNotesServicePaginationReq.md#tojson-1)
- [toJsonString](CreditNotesServicePaginationReq.md#tojsonstring)
- [equals](CreditNotesServicePaginationReq.md#equals-1)
- [fromBinary](CreditNotesServicePaginationReq.md#frombinary-1)
- [fromJson](CreditNotesServicePaginationReq.md#fromjson-1)
- [fromJsonString](CreditNotesServicePaginationReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new CreditNotesServicePaginationReq**(`data?`): [`CreditNotesServicePaginationReq`](CreditNotesServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`CreditNotesServicePaginationReq`](CreditNotesServicePaginationReq.md)\> |

#### Returns

[`CreditNotesServicePaginationReq`](CreditNotesServicePaginationReq.md)

#### Overrides

Message\&lt;CreditNotesServicePaginationReq\&gt;.constructor

#### Defined in

[src/credit_notes.scailo_pb.ts:2054](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/credit_notes.scailo_pb.ts#L2054)

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

[src/credit_notes.scailo_pb.ts:2007](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/credit_notes.scailo_pb.ts#L2007)

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

[src/credit_notes.scailo_pb.ts:1991](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/credit_notes.scailo_pb.ts#L1991)

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

[src/credit_notes.scailo_pb.ts:2023](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/credit_notes.scailo_pb.ts#L2023)

___

### sortKey

• **sortKey**: [`CREDIT_NOTE_SORT_KEY`](../enums/CREDIT_NOTE_SORT_KEY.md) = `CREDIT_NOTE_SORT_KEY.CREDIT_NOTE_SORT_KEY_ID_UNSPECIFIED`

**`Optional`**

**`Description`**

The specific field key to sort the results by.

**`Generated`**

from field: Scailo.CREDIT_NOTE_SORT_KEY sort_key = 5;

#### Defined in

[src/credit_notes.scailo_pb.ts:2045](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/credit_notes.scailo_pb.ts#L2045)

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

[src/credit_notes.scailo_pb.ts:2035](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/credit_notes.scailo_pb.ts#L2035)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

The status of this credit note

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 6;

#### Defined in

[src/credit_notes.scailo_pb.ts:2052](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/credit_notes.scailo_pb.ts#L2052)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/credit_notes.scailo_pb.ts:2061](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/credit_notes.scailo_pb.ts#L2061)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/credit_notes.scailo_pb.ts:2059](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/credit_notes.scailo_pb.ts#L2059)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.CreditNotesServicePaginationReq"``

#### Defined in

[src/credit_notes.scailo_pb.ts:2060](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/credit_notes.scailo_pb.ts#L2060)

## Methods

### clone

▸ **clone**(): [`CreditNotesServicePaginationReq`](CreditNotesServicePaginationReq.md)

Create a deep copy.

#### Returns

[`CreditNotesServicePaginationReq`](CreditNotesServicePaginationReq.md)

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
| `other` | `undefined` \| ``null`` \| [`CreditNotesServicePaginationReq`](CreditNotesServicePaginationReq.md) \| `PlainMessage`\<[`CreditNotesServicePaginationReq`](CreditNotesServicePaginationReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`CreditNotesServicePaginationReq`](CreditNotesServicePaginationReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`CreditNotesServicePaginationReq`](CreditNotesServicePaginationReq.md)\>

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
| `a` | `undefined` \| [`CreditNotesServicePaginationReq`](CreditNotesServicePaginationReq.md) \| `PlainMessage`\<[`CreditNotesServicePaginationReq`](CreditNotesServicePaginationReq.md)\> |
| `b` | `undefined` \| [`CreditNotesServicePaginationReq`](CreditNotesServicePaginationReq.md) \| `PlainMessage`\<[`CreditNotesServicePaginationReq`](CreditNotesServicePaginationReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/credit_notes.scailo_pb.ts:2082](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/credit_notes.scailo_pb.ts#L2082)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`CreditNotesServicePaginationReq`](CreditNotesServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`CreditNotesServicePaginationReq`](CreditNotesServicePaginationReq.md)

#### Defined in

[src/credit_notes.scailo_pb.ts:2070](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/credit_notes.scailo_pb.ts#L2070)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`CreditNotesServicePaginationReq`](CreditNotesServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`CreditNotesServicePaginationReq`](CreditNotesServicePaginationReq.md)

#### Defined in

[src/credit_notes.scailo_pb.ts:2074](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/credit_notes.scailo_pb.ts#L2074)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`CreditNotesServicePaginationReq`](CreditNotesServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`CreditNotesServicePaginationReq`](CreditNotesServicePaginationReq.md)

#### Defined in

[src/credit_notes.scailo_pb.ts:2078](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/credit_notes.scailo_pb.ts#L2078)
