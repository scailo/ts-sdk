[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ShiftsGroupsServiceCountReq

# Class: ShiftsGroupsServiceCountReq

Describes the base request payload of a count search

**`Generated`**

from message Scailo.ShiftsGroupsServiceCountReq

## Hierarchy

- `Message`\<[`ShiftsGroupsServiceCountReq`](ShiftsGroupsServiceCountReq.md)\>

  ↳ **`ShiftsGroupsServiceCountReq`**

## Table of contents

### Constructors

- [constructor](ShiftsGroupsServiceCountReq.md#constructor)

### Properties

- [approvedByUserId](ShiftsGroupsServiceCountReq.md#approvedbyuserid)
- [approvedOnEnd](ShiftsGroupsServiceCountReq.md#approvedonend)
- [approvedOnStart](ShiftsGroupsServiceCountReq.md#approvedonstart)
- [approverRoleId](ShiftsGroupsServiceCountReq.md#approverroleid)
- [code](ShiftsGroupsServiceCountReq.md#code)
- [completedOnEnd](ShiftsGroupsServiceCountReq.md#completedonend)
- [completedOnStart](ShiftsGroupsServiceCountReq.md#completedonstart)
- [creationTimestampEnd](ShiftsGroupsServiceCountReq.md#creationtimestampend)
- [creationTimestampStart](ShiftsGroupsServiceCountReq.md#creationtimestampstart)
- [entityUuid](ShiftsGroupsServiceCountReq.md#entityuuid)
- [isActive](ShiftsGroupsServiceCountReq.md#isactive)
- [modificationTimestampEnd](ShiftsGroupsServiceCountReq.md#modificationtimestampend)
- [modificationTimestampStart](ShiftsGroupsServiceCountReq.md#modificationtimestampstart)
- [name](ShiftsGroupsServiceCountReq.md#name)
- [status](ShiftsGroupsServiceCountReq.md#status)
- [fields](ShiftsGroupsServiceCountReq.md#fields)
- [runtime](ShiftsGroupsServiceCountReq.md#runtime)
- [typeName](ShiftsGroupsServiceCountReq.md#typename)

### Methods

- [clone](ShiftsGroupsServiceCountReq.md#clone)
- [equals](ShiftsGroupsServiceCountReq.md#equals)
- [fromBinary](ShiftsGroupsServiceCountReq.md#frombinary)
- [fromJson](ShiftsGroupsServiceCountReq.md#fromjson)
- [fromJsonString](ShiftsGroupsServiceCountReq.md#fromjsonstring)
- [getType](ShiftsGroupsServiceCountReq.md#gettype)
- [toBinary](ShiftsGroupsServiceCountReq.md#tobinary)
- [toJSON](ShiftsGroupsServiceCountReq.md#tojson)
- [toJson](ShiftsGroupsServiceCountReq.md#tojson-1)
- [toJsonString](ShiftsGroupsServiceCountReq.md#tojsonstring)
- [equals](ShiftsGroupsServiceCountReq.md#equals-1)
- [fromBinary](ShiftsGroupsServiceCountReq.md#frombinary-1)
- [fromJson](ShiftsGroupsServiceCountReq.md#fromjson-1)
- [fromJsonString](ShiftsGroupsServiceCountReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new ShiftsGroupsServiceCountReq**(`data?`): [`ShiftsGroupsServiceCountReq`](ShiftsGroupsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ShiftsGroupsServiceCountReq`](ShiftsGroupsServiceCountReq.md)\> |

#### Returns

[`ShiftsGroupsServiceCountReq`](ShiftsGroupsServiceCountReq.md)

#### Overrides

Message\&lt;ShiftsGroupsServiceCountReq\&gt;.constructor

#### Defined in

[src/shifts_groups.scailo_pb.ts:1523](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/shifts_groups.scailo_pb.ts#L1523)

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

[src/shifts_groups.scailo_pb.ts:1459](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/shifts_groups.scailo_pb.ts#L1459)

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

[src/shifts_groups.scailo_pb.ts:1443](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/shifts_groups.scailo_pb.ts#L1443)

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

[src/shifts_groups.scailo_pb.ts:1427](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/shifts_groups.scailo_pb.ts#L1427)

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

[src/shifts_groups.scailo_pb.ts:1475](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/shifts_groups.scailo_pb.ts#L1475)

___

### code

• **code**: `string` = `""`

The shift group code

**`Generated`**

from field: string code = 21;

#### Defined in

[src/shifts_groups.scailo_pb.ts:1521](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/shifts_groups.scailo_pb.ts#L1521)

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

[src/shifts_groups.scailo_pb.ts:1507](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/shifts_groups.scailo_pb.ts#L1507)

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

[src/shifts_groups.scailo_pb.ts:1491](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/shifts_groups.scailo_pb.ts#L1491)

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

[src/shifts_groups.scailo_pb.ts:1351](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/shifts_groups.scailo_pb.ts#L1351)

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

[src/shifts_groups.scailo_pb.ts:1335](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/shifts_groups.scailo_pb.ts#L1335)

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

[src/shifts_groups.scailo_pb.ts:1399](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/shifts_groups.scailo_pb.ts#L1399)

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

[src/shifts_groups.scailo_pb.ts:1319](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/shifts_groups.scailo_pb.ts#L1319)

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

[src/shifts_groups.scailo_pb.ts:1383](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/shifts_groups.scailo_pb.ts#L1383)

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

[src/shifts_groups.scailo_pb.ts:1367](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/shifts_groups.scailo_pb.ts#L1367)

___

### name

• **name**: `string` = `""`

The name of the shift group

**`Generated`**

from field: string name = 20;

#### Defined in

[src/shifts_groups.scailo_pb.ts:1514](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/shifts_groups.scailo_pb.ts#L1514)

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

[src/shifts_groups.scailo_pb.ts:1411](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/shifts_groups.scailo_pb.ts#L1411)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/shifts_groups.scailo_pb.ts:1530](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/shifts_groups.scailo_pb.ts#L1530)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/shifts_groups.scailo_pb.ts:1528](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/shifts_groups.scailo_pb.ts#L1528)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ShiftsGroupsServiceCountReq"``

#### Defined in

[src/shifts_groups.scailo_pb.ts:1529](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/shifts_groups.scailo_pb.ts#L1529)

## Methods

### clone

▸ **clone**(): [`ShiftsGroupsServiceCountReq`](ShiftsGroupsServiceCountReq.md)

Create a deep copy.

#### Returns

[`ShiftsGroupsServiceCountReq`](ShiftsGroupsServiceCountReq.md)

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
| `other` | `undefined` \| ``null`` \| [`ShiftsGroupsServiceCountReq`](ShiftsGroupsServiceCountReq.md) \| `PlainMessage`\<[`ShiftsGroupsServiceCountReq`](ShiftsGroupsServiceCountReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`ShiftsGroupsServiceCountReq`](ShiftsGroupsServiceCountReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ShiftsGroupsServiceCountReq`](ShiftsGroupsServiceCountReq.md)\>

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
| `a` | `undefined` \| [`ShiftsGroupsServiceCountReq`](ShiftsGroupsServiceCountReq.md) \| `PlainMessage`\<[`ShiftsGroupsServiceCountReq`](ShiftsGroupsServiceCountReq.md)\> |
| `b` | `undefined` \| [`ShiftsGroupsServiceCountReq`](ShiftsGroupsServiceCountReq.md) \| `PlainMessage`\<[`ShiftsGroupsServiceCountReq`](ShiftsGroupsServiceCountReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/shifts_groups.scailo_pb.ts:1560](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/shifts_groups.scailo_pb.ts#L1560)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ShiftsGroupsServiceCountReq`](ShiftsGroupsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ShiftsGroupsServiceCountReq`](ShiftsGroupsServiceCountReq.md)

#### Defined in

[src/shifts_groups.scailo_pb.ts:1548](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/shifts_groups.scailo_pb.ts#L1548)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ShiftsGroupsServiceCountReq`](ShiftsGroupsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ShiftsGroupsServiceCountReq`](ShiftsGroupsServiceCountReq.md)

#### Defined in

[src/shifts_groups.scailo_pb.ts:1552](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/shifts_groups.scailo_pb.ts#L1552)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ShiftsGroupsServiceCountReq`](ShiftsGroupsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ShiftsGroupsServiceCountReq`](ShiftsGroupsServiceCountReq.md)

#### Defined in

[src/shifts_groups.scailo_pb.ts:1556](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/shifts_groups.scailo_pb.ts#L1556)
