[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / QCParamsServiceFilterReq

# Class: QCParamsServiceFilterReq

Describes the base request payload of a filter search

**`Generated`**

from message Scailo.QCParamsServiceFilterReq

## Hierarchy

- `Message`\<[`QCParamsServiceFilterReq`](QCParamsServiceFilterReq.md)\>

  ↳ **`QCParamsServiceFilterReq`**

## Table of contents

### Constructors

- [constructor](QCParamsServiceFilterReq.md#constructor)

### Properties

- [approvedByUserId](QCParamsServiceFilterReq.md#approvedbyuserid)
- [approvedOnEnd](QCParamsServiceFilterReq.md#approvedonend)
- [approvedOnStart](QCParamsServiceFilterReq.md#approvedonstart)
- [approverRoleId](QCParamsServiceFilterReq.md#approverroleid)
- [code](QCParamsServiceFilterReq.md#code)
- [completedOnEnd](QCParamsServiceFilterReq.md#completedonend)
- [completedOnStart](QCParamsServiceFilterReq.md#completedonstart)
- [count](QCParamsServiceFilterReq.md#count)
- [creationTimestampEnd](QCParamsServiceFilterReq.md#creationtimestampend)
- [creationTimestampStart](QCParamsServiceFilterReq.md#creationtimestampstart)
- [entityUuid](QCParamsServiceFilterReq.md#entityuuid)
- [isActive](QCParamsServiceFilterReq.md#isactive)
- [modificationTimestampEnd](QCParamsServiceFilterReq.md#modificationtimestampend)
- [modificationTimestampStart](QCParamsServiceFilterReq.md#modificationtimestampstart)
- [name](QCParamsServiceFilterReq.md#name)
- [offset](QCParamsServiceFilterReq.md#offset)
- [sortKey](QCParamsServiceFilterReq.md#sortkey)
- [sortOrder](QCParamsServiceFilterReq.md#sortorder)
- [status](QCParamsServiceFilterReq.md#status)
- [fields](QCParamsServiceFilterReq.md#fields)
- [runtime](QCParamsServiceFilterReq.md#runtime)
- [typeName](QCParamsServiceFilterReq.md#typename)

### Methods

- [clone](QCParamsServiceFilterReq.md#clone)
- [equals](QCParamsServiceFilterReq.md#equals)
- [fromBinary](QCParamsServiceFilterReq.md#frombinary)
- [fromJson](QCParamsServiceFilterReq.md#fromjson)
- [fromJsonString](QCParamsServiceFilterReq.md#fromjsonstring)
- [getType](QCParamsServiceFilterReq.md#gettype)
- [toBinary](QCParamsServiceFilterReq.md#tobinary)
- [toJSON](QCParamsServiceFilterReq.md#tojson)
- [toJson](QCParamsServiceFilterReq.md#tojson-1)
- [toJsonString](QCParamsServiceFilterReq.md#tojsonstring)
- [equals](QCParamsServiceFilterReq.md#equals-1)
- [fromBinary](QCParamsServiceFilterReq.md#frombinary-1)
- [fromJson](QCParamsServiceFilterReq.md#fromjson-1)
- [fromJsonString](QCParamsServiceFilterReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new QCParamsServiceFilterReq**(`data?`): [`QCParamsServiceFilterReq`](QCParamsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`QCParamsServiceFilterReq`](QCParamsServiceFilterReq.md)\> |

#### Returns

[`QCParamsServiceFilterReq`](QCParamsServiceFilterReq.md)

#### Overrides

Message\&lt;QCParamsServiceFilterReq\&gt;.constructor

#### Defined in

[src/qc_params.scailo_pb.ts:885](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/qc_params.scailo_pb.ts#L885)

## Properties

### approvedByUserId

• **approvedByUserId**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Filter by the specific user ID who approved the records.

**`Example`**

```ts
501
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 approved_by_user_id = 13;

#### Defined in

[src/qc_params.scailo_pb.ts:821](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/qc_params.scailo_pb.ts#L821)

___

### approvedOnEnd

• **approvedOnEnd**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Filter records approved ON or BEFORE this UNIX timestamp.

**`Example`**

```ts
1704067199
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 approved_on_end = 12;

#### Defined in

[src/qc_params.scailo_pb.ts:805](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/qc_params.scailo_pb.ts#L805)

___

### approvedOnStart

• **approvedOnStart**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Filter records approved ON or AFTER this UNIX timestamp.

**`Example`**

```ts
1672531200
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 approved_on_start = 11;

#### Defined in

[src/qc_params.scailo_pb.ts:789](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/qc_params.scailo_pb.ts#L789)

___

### approverRoleId

• **approverRoleId**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Filter by the role ID of the approver.

**`Example`**

```ts
5
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 approver_role_id = 14;

#### Defined in

[src/qc_params.scailo_pb.ts:837](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/qc_params.scailo_pb.ts#L837)

___

### code

• **code**: `string` = `""`

The qc param code

**`Generated`**

from field: string code = 21;

#### Defined in

[src/qc_params.scailo_pb.ts:883](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/qc_params.scailo_pb.ts#L883)

___

### completedOnEnd

• **completedOnEnd**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Filter records completed ON or BEFORE this UNIX timestamp.

**`Example`**

```ts
1704067199
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 completed_on_end = 16;

#### Defined in

[src/qc_params.scailo_pb.ts:869](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/qc_params.scailo_pb.ts#L869)

___

### completedOnStart

• **completedOnStart**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Filter records completed ON or AFTER this UNIX timestamp.

**`Example`**

```ts
1672531200
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 completed_on_start = 15;

#### Defined in

[src/qc_params.scailo_pb.ts:853](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/qc_params.scailo_pb.ts#L853)

___

### count

• **count**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

Number of records to fetch. **Critical:** Use `-1` to retrieve all records. A value of `0` will return no results. Default is `0`.

**`Example`**

```ts
100
```

**`Regex`**

^(?:-1|0|[1-9][0-9]*)$

**`Format`**

Must be -1 or any non-negative integer (>= -1).

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/qc_params.scailo_pb.ts:643](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/qc_params.scailo_pb.ts#L643)

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Filter records created ON or BEFORE this UNIX timestamp.

**`Example`**

```ts
1704067199
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 creation_timestamp_end = 102;

#### Defined in

[src/qc_params.scailo_pb.ts:713](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/qc_params.scailo_pb.ts#L713)

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Filter records created ON or AFTER this UNIX timestamp.

**`Example`**

```ts
1672531200
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 creation_timestamp_start = 101;

#### Defined in

[src/qc_params.scailo_pb.ts:697](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/qc_params.scailo_pb.ts#L697)

___

### entityUuid

• **entityUuid**: `string` = `""`

**`Optional`**

**`Description`**

Filter by the organization UUID.

**`Example`**

```ts
"550e8400-e29b-41d4-a716-446655440000"
```

**`Regex`**

^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$

**`Format`**

If provided, must be a valid v4 UUID in canonical hyphenated form.

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

[src/qc_params.scailo_pb.ts:761](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/qc_params.scailo_pb.ts#L761)

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

[src/qc_params.scailo_pb.ts:627](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/qc_params.scailo_pb.ts#L627)

___

### modificationTimestampEnd

• **modificationTimestampEnd**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Filter records modified ON or BEFORE this UNIX timestamp.

**`Example`**

```ts
1704067199
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 modification_timestamp_end = 104;

#### Defined in

[src/qc_params.scailo_pb.ts:745](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/qc_params.scailo_pb.ts#L745)

___

### modificationTimestampStart

• **modificationTimestampStart**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Filter records modified ON or AFTER this UNIX timestamp.

**`Example`**

```ts
1672531200
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 modification_timestamp_start = 103;

#### Defined in

[src/qc_params.scailo_pb.ts:729](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/qc_params.scailo_pb.ts#L729)

___

### name

• **name**: `string` = `""`

The name of the qc param

**`Generated`**

from field: string name = 20;

#### Defined in

[src/qc_params.scailo_pb.ts:876](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/qc_params.scailo_pb.ts#L876)

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

[src/qc_params.scailo_pb.ts:659](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/qc_params.scailo_pb.ts#L659)

___

### sortKey

• **sortKey**: [`QC_PARAM_SORT_KEY`](../enums/QC_PARAM_SORT_KEY.md) = `QC_PARAM_SORT_KEY.QC_PARAM_SORT_KEY_ID_UNSPECIFIED`

**`Optional`**

**`Description`**

The field used for sorting.

**`Generated`**

from field: Scailo.QC_PARAM_SORT_KEY sort_key = 5;

#### Defined in

[src/qc_params.scailo_pb.ts:681](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/qc_params.scailo_pb.ts#L681)

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

[src/qc_params.scailo_pb.ts:671](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/qc_params.scailo_pb.ts#L671)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

**`Optional`**

**`Description`**

Filter by lifecycle status (e.g., DRAFT, STANDING).

**`Example`**

```ts
STANDING
```

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

[src/qc_params.scailo_pb.ts:773](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/qc_params.scailo_pb.ts#L773)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/qc_params.scailo_pb.ts:892](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/qc_params.scailo_pb.ts#L892)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/qc_params.scailo_pb.ts:890](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/qc_params.scailo_pb.ts#L890)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.QCParamsServiceFilterReq"``

#### Defined in

[src/qc_params.scailo_pb.ts:891](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/qc_params.scailo_pb.ts#L891)

## Methods

### clone

▸ **clone**(): [`QCParamsServiceFilterReq`](QCParamsServiceFilterReq.md)

Create a deep copy.

#### Returns

[`QCParamsServiceFilterReq`](QCParamsServiceFilterReq.md)

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
| `other` | `undefined` \| ``null`` \| [`QCParamsServiceFilterReq`](QCParamsServiceFilterReq.md) \| `PlainMessage`\<[`QCParamsServiceFilterReq`](QCParamsServiceFilterReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`QCParamsServiceFilterReq`](QCParamsServiceFilterReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`QCParamsServiceFilterReq`](QCParamsServiceFilterReq.md)\>

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
| `a` | `undefined` \| [`QCParamsServiceFilterReq`](QCParamsServiceFilterReq.md) \| `PlainMessage`\<[`QCParamsServiceFilterReq`](QCParamsServiceFilterReq.md)\> |
| `b` | `undefined` \| [`QCParamsServiceFilterReq`](QCParamsServiceFilterReq.md) \| `PlainMessage`\<[`QCParamsServiceFilterReq`](QCParamsServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/qc_params.scailo_pb.ts:926](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/qc_params.scailo_pb.ts#L926)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`QCParamsServiceFilterReq`](QCParamsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`QCParamsServiceFilterReq`](QCParamsServiceFilterReq.md)

#### Defined in

[src/qc_params.scailo_pb.ts:914](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/qc_params.scailo_pb.ts#L914)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`QCParamsServiceFilterReq`](QCParamsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QCParamsServiceFilterReq`](QCParamsServiceFilterReq.md)

#### Defined in

[src/qc_params.scailo_pb.ts:918](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/qc_params.scailo_pb.ts#L918)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`QCParamsServiceFilterReq`](QCParamsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QCParamsServiceFilterReq`](QCParamsServiceFilterReq.md)

#### Defined in

[src/qc_params.scailo_pb.ts:922](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/qc_params.scailo_pb.ts#L922)
