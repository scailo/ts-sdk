[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / VisitationsServicePaginationReq

# Class: VisitationsServicePaginationReq

Describes a pagination request to retrieve records

**`Generated`**

from message Scailo.VisitationsServicePaginationReq

## Hierarchy

- `Message`\<[`VisitationsServicePaginationReq`](VisitationsServicePaginationReq.md)\>

  ↳ **`VisitationsServicePaginationReq`**

## Table of contents

### Constructors

- [constructor](VisitationsServicePaginationReq.md#constructor)

### Properties

- [count](VisitationsServicePaginationReq.md#count)
- [isActive](VisitationsServicePaginationReq.md#isactive)
- [offset](VisitationsServicePaginationReq.md#offset)
- [sortKey](VisitationsServicePaginationReq.md#sortkey)
- [sortOrder](VisitationsServicePaginationReq.md#sortorder)
- [status](VisitationsServicePaginationReq.md#status)
- [fields](VisitationsServicePaginationReq.md#fields)
- [runtime](VisitationsServicePaginationReq.md#runtime)
- [typeName](VisitationsServicePaginationReq.md#typename)

### Methods

- [clone](VisitationsServicePaginationReq.md#clone)
- [equals](VisitationsServicePaginationReq.md#equals)
- [fromBinary](VisitationsServicePaginationReq.md#frombinary)
- [fromJson](VisitationsServicePaginationReq.md#fromjson)
- [fromJsonString](VisitationsServicePaginationReq.md#fromjsonstring)
- [getType](VisitationsServicePaginationReq.md#gettype)
- [toBinary](VisitationsServicePaginationReq.md#tobinary)
- [toJSON](VisitationsServicePaginationReq.md#tojson)
- [toJson](VisitationsServicePaginationReq.md#tojson-1)
- [toJsonString](VisitationsServicePaginationReq.md#tojsonstring)
- [equals](VisitationsServicePaginationReq.md#equals-1)
- [fromBinary](VisitationsServicePaginationReq.md#frombinary-1)
- [fromJson](VisitationsServicePaginationReq.md#fromjson-1)
- [fromJsonString](VisitationsServicePaginationReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new VisitationsServicePaginationReq**(`data?`): [`VisitationsServicePaginationReq`](VisitationsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`VisitationsServicePaginationReq`](VisitationsServicePaginationReq.md)\> |

#### Returns

[`VisitationsServicePaginationReq`](VisitationsServicePaginationReq.md)

#### Overrides

Message\&lt;VisitationsServicePaginationReq\&gt;.constructor

#### Defined in

[src/visitations.scailo_pb.ts:870](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/visitations.scailo_pb.ts#L870)

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

[src/visitations.scailo_pb.ts:823](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/visitations.scailo_pb.ts#L823)

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

[src/visitations.scailo_pb.ts:807](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/visitations.scailo_pb.ts#L807)

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

[src/visitations.scailo_pb.ts:839](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/visitations.scailo_pb.ts#L839)

___

### sortKey

• **sortKey**: [`VISITATION_SORT_KEY`](../enums/VISITATION_SORT_KEY.md) = `VISITATION_SORT_KEY.VISITATION_SORT_KEY_ID_UNSPECIFIED`

**`Optional`**

**`Description`**

The specific field key to sort the results by.

**`Generated`**

from field: Scailo.VISITATION_SORT_KEY sort_key = 5;

#### Defined in

[src/visitations.scailo_pb.ts:861](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/visitations.scailo_pb.ts#L861)

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

[src/visitations.scailo_pb.ts:851](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/visitations.scailo_pb.ts#L851)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

The status of this visitation

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 6;

#### Defined in

[src/visitations.scailo_pb.ts:868](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/visitations.scailo_pb.ts#L868)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/visitations.scailo_pb.ts:877](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/visitations.scailo_pb.ts#L877)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/visitations.scailo_pb.ts:875](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/visitations.scailo_pb.ts#L875)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.VisitationsServicePaginationReq"``

#### Defined in

[src/visitations.scailo_pb.ts:876](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/visitations.scailo_pb.ts#L876)

## Methods

### clone

▸ **clone**(): [`VisitationsServicePaginationReq`](VisitationsServicePaginationReq.md)

Create a deep copy.

#### Returns

[`VisitationsServicePaginationReq`](VisitationsServicePaginationReq.md)

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
| `other` | `undefined` \| ``null`` \| [`VisitationsServicePaginationReq`](VisitationsServicePaginationReq.md) \| `PlainMessage`\<[`VisitationsServicePaginationReq`](VisitationsServicePaginationReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`VisitationsServicePaginationReq`](VisitationsServicePaginationReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`VisitationsServicePaginationReq`](VisitationsServicePaginationReq.md)\>

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
| `a` | `undefined` \| [`VisitationsServicePaginationReq`](VisitationsServicePaginationReq.md) \| `PlainMessage`\<[`VisitationsServicePaginationReq`](VisitationsServicePaginationReq.md)\> |
| `b` | `undefined` \| [`VisitationsServicePaginationReq`](VisitationsServicePaginationReq.md) \| `PlainMessage`\<[`VisitationsServicePaginationReq`](VisitationsServicePaginationReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/visitations.scailo_pb.ts:898](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/visitations.scailo_pb.ts#L898)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`VisitationsServicePaginationReq`](VisitationsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`VisitationsServicePaginationReq`](VisitationsServicePaginationReq.md)

#### Defined in

[src/visitations.scailo_pb.ts:886](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/visitations.scailo_pb.ts#L886)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`VisitationsServicePaginationReq`](VisitationsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VisitationsServicePaginationReq`](VisitationsServicePaginationReq.md)

#### Defined in

[src/visitations.scailo_pb.ts:890](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/visitations.scailo_pb.ts#L890)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`VisitationsServicePaginationReq`](VisitationsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VisitationsServicePaginationReq`](VisitationsServicePaginationReq.md)

#### Defined in

[src/visitations.scailo_pb.ts:894](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/visitations.scailo_pb.ts#L894)
