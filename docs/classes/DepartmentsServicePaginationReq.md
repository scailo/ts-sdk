[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / DepartmentsServicePaginationReq

# Class: DepartmentsServicePaginationReq

Describes a pagination request to retrieve records

**`Generated`**

from message Scailo.DepartmentsServicePaginationReq

## Hierarchy

- `Message`\<[`DepartmentsServicePaginationReq`](DepartmentsServicePaginationReq.md)\>

  ↳ **`DepartmentsServicePaginationReq`**

## Table of contents

### Constructors

- [constructor](DepartmentsServicePaginationReq.md#constructor)

### Properties

- [count](DepartmentsServicePaginationReq.md#count)
- [isActive](DepartmentsServicePaginationReq.md#isactive)
- [offset](DepartmentsServicePaginationReq.md#offset)
- [sortKey](DepartmentsServicePaginationReq.md#sortkey)
- [sortOrder](DepartmentsServicePaginationReq.md#sortorder)
- [status](DepartmentsServicePaginationReq.md#status)
- [fields](DepartmentsServicePaginationReq.md#fields)
- [runtime](DepartmentsServicePaginationReq.md#runtime)
- [typeName](DepartmentsServicePaginationReq.md#typename)

### Methods

- [clone](DepartmentsServicePaginationReq.md#clone)
- [equals](DepartmentsServicePaginationReq.md#equals)
- [fromBinary](DepartmentsServicePaginationReq.md#frombinary)
- [fromJson](DepartmentsServicePaginationReq.md#fromjson)
- [fromJsonString](DepartmentsServicePaginationReq.md#fromjsonstring)
- [getType](DepartmentsServicePaginationReq.md#gettype)
- [toBinary](DepartmentsServicePaginationReq.md#tobinary)
- [toJSON](DepartmentsServicePaginationReq.md#tojson)
- [toJson](DepartmentsServicePaginationReq.md#tojson-1)
- [toJsonString](DepartmentsServicePaginationReq.md#tojsonstring)
- [equals](DepartmentsServicePaginationReq.md#equals-1)
- [fromBinary](DepartmentsServicePaginationReq.md#frombinary-1)
- [fromJson](DepartmentsServicePaginationReq.md#fromjson-1)
- [fromJsonString](DepartmentsServicePaginationReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new DepartmentsServicePaginationReq**(`data?`): [`DepartmentsServicePaginationReq`](DepartmentsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`DepartmentsServicePaginationReq`](DepartmentsServicePaginationReq.md)\> |

#### Returns

[`DepartmentsServicePaginationReq`](DepartmentsServicePaginationReq.md)

#### Overrides

Message\&lt;DepartmentsServicePaginationReq\&gt;.constructor

#### Defined in

[src/departments.scailo_pb.ts:578](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/departments.scailo_pb.ts#L578)

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

[src/departments.scailo_pb.ts:531](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/departments.scailo_pb.ts#L531)

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

[src/departments.scailo_pb.ts:515](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/departments.scailo_pb.ts#L515)

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

[src/departments.scailo_pb.ts:547](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/departments.scailo_pb.ts#L547)

___

### sortKey

• **sortKey**: [`DEPARTMENT_SORT_KEY`](../enums/DEPARTMENT_SORT_KEY.md) = `DEPARTMENT_SORT_KEY.DEPARTMENT_SORT_KEY_ID_UNSPECIFIED`

**`Optional`**

**`Description`**

The specific field key to sort the results by.

**`Generated`**

from field: Scailo.DEPARTMENT_SORT_KEY sort_key = 5;

#### Defined in

[src/departments.scailo_pb.ts:569](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/departments.scailo_pb.ts#L569)

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

[src/departments.scailo_pb.ts:559](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/departments.scailo_pb.ts#L559)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

The status of this department

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 6;

#### Defined in

[src/departments.scailo_pb.ts:576](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/departments.scailo_pb.ts#L576)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/departments.scailo_pb.ts:585](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/departments.scailo_pb.ts#L585)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/departments.scailo_pb.ts:583](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/departments.scailo_pb.ts#L583)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.DepartmentsServicePaginationReq"``

#### Defined in

[src/departments.scailo_pb.ts:584](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/departments.scailo_pb.ts#L584)

## Methods

### clone

▸ **clone**(): [`DepartmentsServicePaginationReq`](DepartmentsServicePaginationReq.md)

Create a deep copy.

#### Returns

[`DepartmentsServicePaginationReq`](DepartmentsServicePaginationReq.md)

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
| `other` | `undefined` \| ``null`` \| [`DepartmentsServicePaginationReq`](DepartmentsServicePaginationReq.md) \| `PlainMessage`\<[`DepartmentsServicePaginationReq`](DepartmentsServicePaginationReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`DepartmentsServicePaginationReq`](DepartmentsServicePaginationReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`DepartmentsServicePaginationReq`](DepartmentsServicePaginationReq.md)\>

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
| `a` | `undefined` \| [`DepartmentsServicePaginationReq`](DepartmentsServicePaginationReq.md) \| `PlainMessage`\<[`DepartmentsServicePaginationReq`](DepartmentsServicePaginationReq.md)\> |
| `b` | `undefined` \| [`DepartmentsServicePaginationReq`](DepartmentsServicePaginationReq.md) \| `PlainMessage`\<[`DepartmentsServicePaginationReq`](DepartmentsServicePaginationReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/departments.scailo_pb.ts:606](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/departments.scailo_pb.ts#L606)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`DepartmentsServicePaginationReq`](DepartmentsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`DepartmentsServicePaginationReq`](DepartmentsServicePaginationReq.md)

#### Defined in

[src/departments.scailo_pb.ts:594](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/departments.scailo_pb.ts#L594)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`DepartmentsServicePaginationReq`](DepartmentsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`DepartmentsServicePaginationReq`](DepartmentsServicePaginationReq.md)

#### Defined in

[src/departments.scailo_pb.ts:598](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/departments.scailo_pb.ts#L598)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`DepartmentsServicePaginationReq`](DepartmentsServicePaginationReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`DepartmentsServicePaginationReq`](DepartmentsServicePaginationReq.md)

#### Defined in

[src/departments.scailo_pb.ts:602](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/departments.scailo_pb.ts#L602)
