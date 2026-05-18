[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / LeavesTypesServiceFilterReq

# Class: LeavesTypesServiceFilterReq

Describes the base request payload of a filter search

**`Generated`**

from message Scailo.LeavesTypesServiceFilterReq

## Hierarchy

- `Message`\<[`LeavesTypesServiceFilterReq`](LeavesTypesServiceFilterReq.md)\>

  ↳ **`LeavesTypesServiceFilterReq`**

## Table of contents

### Constructors

- [constructor](LeavesTypesServiceFilterReq.md#constructor)

### Properties

- [approvedByUserId](LeavesTypesServiceFilterReq.md#approvedbyuserid)
- [approvedOnEnd](LeavesTypesServiceFilterReq.md#approvedonend)
- [approvedOnStart](LeavesTypesServiceFilterReq.md#approvedonstart)
- [approverRoleId](LeavesTypesServiceFilterReq.md#approverroleid)
- [code](LeavesTypesServiceFilterReq.md#code)
- [completedOnEnd](LeavesTypesServiceFilterReq.md#completedonend)
- [completedOnStart](LeavesTypesServiceFilterReq.md#completedonstart)
- [count](LeavesTypesServiceFilterReq.md#count)
- [creationTimestampEnd](LeavesTypesServiceFilterReq.md#creationtimestampend)
- [creationTimestampStart](LeavesTypesServiceFilterReq.md#creationtimestampstart)
- [entityUuid](LeavesTypesServiceFilterReq.md#entityuuid)
- [isActive](LeavesTypesServiceFilterReq.md#isactive)
- [modificationTimestampEnd](LeavesTypesServiceFilterReq.md#modificationtimestampend)
- [modificationTimestampStart](LeavesTypesServiceFilterReq.md#modificationtimestampstart)
- [name](LeavesTypesServiceFilterReq.md#name)
- [offset](LeavesTypesServiceFilterReq.md#offset)
- [sortKey](LeavesTypesServiceFilterReq.md#sortkey)
- [sortOrder](LeavesTypesServiceFilterReq.md#sortorder)
- [status](LeavesTypesServiceFilterReq.md#status)
- [fields](LeavesTypesServiceFilterReq.md#fields)
- [runtime](LeavesTypesServiceFilterReq.md#runtime)
- [typeName](LeavesTypesServiceFilterReq.md#typename)

### Methods

- [clone](LeavesTypesServiceFilterReq.md#clone)
- [equals](LeavesTypesServiceFilterReq.md#equals)
- [fromBinary](LeavesTypesServiceFilterReq.md#frombinary)
- [fromJson](LeavesTypesServiceFilterReq.md#fromjson)
- [fromJsonString](LeavesTypesServiceFilterReq.md#fromjsonstring)
- [getType](LeavesTypesServiceFilterReq.md#gettype)
- [toBinary](LeavesTypesServiceFilterReq.md#tobinary)
- [toJSON](LeavesTypesServiceFilterReq.md#tojson)
- [toJson](LeavesTypesServiceFilterReq.md#tojson-1)
- [toJsonString](LeavesTypesServiceFilterReq.md#tojsonstring)
- [equals](LeavesTypesServiceFilterReq.md#equals-1)
- [fromBinary](LeavesTypesServiceFilterReq.md#frombinary-1)
- [fromJson](LeavesTypesServiceFilterReq.md#fromjson-1)
- [fromJsonString](LeavesTypesServiceFilterReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new LeavesTypesServiceFilterReq**(`data?`): [`LeavesTypesServiceFilterReq`](LeavesTypesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`LeavesTypesServiceFilterReq`](LeavesTypesServiceFilterReq.md)\> |

#### Returns

[`LeavesTypesServiceFilterReq`](LeavesTypesServiceFilterReq.md)

#### Overrides

Message\&lt;LeavesTypesServiceFilterReq\&gt;.constructor

#### Defined in

[src/leaves_types.scailo_pb.ts:909](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/leaves_types.scailo_pb.ts#L909)

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

[src/leaves_types.scailo_pb.ts:845](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/leaves_types.scailo_pb.ts#L845)

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

[src/leaves_types.scailo_pb.ts:829](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/leaves_types.scailo_pb.ts#L829)

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

[src/leaves_types.scailo_pb.ts:813](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/leaves_types.scailo_pb.ts#L813)

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

[src/leaves_types.scailo_pb.ts:861](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/leaves_types.scailo_pb.ts#L861)

___

### code

• **code**: `string` = `""`

The leave type code

**`Generated`**

from field: string code = 21;

#### Defined in

[src/leaves_types.scailo_pb.ts:907](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/leaves_types.scailo_pb.ts#L907)

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

[src/leaves_types.scailo_pb.ts:893](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/leaves_types.scailo_pb.ts#L893)

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

[src/leaves_types.scailo_pb.ts:877](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/leaves_types.scailo_pb.ts#L877)

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

[src/leaves_types.scailo_pb.ts:667](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/leaves_types.scailo_pb.ts#L667)

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

[src/leaves_types.scailo_pb.ts:737](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/leaves_types.scailo_pb.ts#L737)

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

[src/leaves_types.scailo_pb.ts:721](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/leaves_types.scailo_pb.ts#L721)

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

[src/leaves_types.scailo_pb.ts:785](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/leaves_types.scailo_pb.ts#L785)

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

[src/leaves_types.scailo_pb.ts:651](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/leaves_types.scailo_pb.ts#L651)

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

[src/leaves_types.scailo_pb.ts:769](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/leaves_types.scailo_pb.ts#L769)

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

[src/leaves_types.scailo_pb.ts:753](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/leaves_types.scailo_pb.ts#L753)

___

### name

• **name**: `string` = `""`

The name of the leave type

**`Generated`**

from field: string name = 20;

#### Defined in

[src/leaves_types.scailo_pb.ts:900](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/leaves_types.scailo_pb.ts#L900)

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

[src/leaves_types.scailo_pb.ts:683](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/leaves_types.scailo_pb.ts#L683)

___

### sortKey

• **sortKey**: [`LEAVE_TYPE_SORT_KEY`](../enums/LEAVE_TYPE_SORT_KEY.md) = `LEAVE_TYPE_SORT_KEY.LEAVE_TYPE_SORT_KEY_ID_UNSPECIFIED`

**`Optional`**

**`Description`**

The field used for sorting.

**`Generated`**

from field: Scailo.LEAVE_TYPE_SORT_KEY sort_key = 5;

#### Defined in

[src/leaves_types.scailo_pb.ts:705](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/leaves_types.scailo_pb.ts#L705)

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

[src/leaves_types.scailo_pb.ts:695](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/leaves_types.scailo_pb.ts#L695)

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

[src/leaves_types.scailo_pb.ts:797](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/leaves_types.scailo_pb.ts#L797)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/leaves_types.scailo_pb.ts:916](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/leaves_types.scailo_pb.ts#L916)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/leaves_types.scailo_pb.ts:914](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/leaves_types.scailo_pb.ts#L914)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.LeavesTypesServiceFilterReq"``

#### Defined in

[src/leaves_types.scailo_pb.ts:915](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/leaves_types.scailo_pb.ts#L915)

## Methods

### clone

▸ **clone**(): [`LeavesTypesServiceFilterReq`](LeavesTypesServiceFilterReq.md)

Create a deep copy.

#### Returns

[`LeavesTypesServiceFilterReq`](LeavesTypesServiceFilterReq.md)

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
| `other` | `undefined` \| ``null`` \| [`LeavesTypesServiceFilterReq`](LeavesTypesServiceFilterReq.md) \| `PlainMessage`\<[`LeavesTypesServiceFilterReq`](LeavesTypesServiceFilterReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`LeavesTypesServiceFilterReq`](LeavesTypesServiceFilterReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`LeavesTypesServiceFilterReq`](LeavesTypesServiceFilterReq.md)\>

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
| `a` | `undefined` \| [`LeavesTypesServiceFilterReq`](LeavesTypesServiceFilterReq.md) \| `PlainMessage`\<[`LeavesTypesServiceFilterReq`](LeavesTypesServiceFilterReq.md)\> |
| `b` | `undefined` \| [`LeavesTypesServiceFilterReq`](LeavesTypesServiceFilterReq.md) \| `PlainMessage`\<[`LeavesTypesServiceFilterReq`](LeavesTypesServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/leaves_types.scailo_pb.ts:950](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/leaves_types.scailo_pb.ts#L950)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`LeavesTypesServiceFilterReq`](LeavesTypesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`LeavesTypesServiceFilterReq`](LeavesTypesServiceFilterReq.md)

#### Defined in

[src/leaves_types.scailo_pb.ts:938](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/leaves_types.scailo_pb.ts#L938)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`LeavesTypesServiceFilterReq`](LeavesTypesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`LeavesTypesServiceFilterReq`](LeavesTypesServiceFilterReq.md)

#### Defined in

[src/leaves_types.scailo_pb.ts:942](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/leaves_types.scailo_pb.ts#L942)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`LeavesTypesServiceFilterReq`](LeavesTypesServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`LeavesTypesServiceFilterReq`](LeavesTypesServiceFilterReq.md)

#### Defined in

[src/leaves_types.scailo_pb.ts:946](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/leaves_types.scailo_pb.ts#L946)
