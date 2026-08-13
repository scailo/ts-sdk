[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / TeamsServiceCountReq

# Class: TeamsServiceCountReq

Target filter request for counting team records matching specific logical criteria.
This message encapsulates lifecycle status filters, timestamp ranges, workflow markers,
and entity references to determine the total size of a targeted dataset.

**Note:** This is the primary message layout used by backend calculation engines, reporting
services, and frontend pagination headers to evaluate total record matches dynamically
before or alongside retrieving paginated results.

**`Generated`**

from message Scailo.TeamsServiceCountReq

## Hierarchy

- `Message`\<[`TeamsServiceCountReq`](TeamsServiceCountReq.md)\>

  ↳ **`TeamsServiceCountReq`**

## Table of contents

### Constructors

- [constructor](TeamsServiceCountReq.md#constructor)

### Properties

- [approvedByUserId](TeamsServiceCountReq.md#approvedbyuserid)
- [approvedOnEnd](TeamsServiceCountReq.md#approvedonend)
- [approvedOnStart](TeamsServiceCountReq.md#approvedonstart)
- [approverRoleId](TeamsServiceCountReq.md#approverroleid)
- [code](TeamsServiceCountReq.md#code)
- [completedOnEnd](TeamsServiceCountReq.md#completedonend)
- [completedOnStart](TeamsServiceCountReq.md#completedonstart)
- [creationTimestampEnd](TeamsServiceCountReq.md#creationtimestampend)
- [creationTimestampStart](TeamsServiceCountReq.md#creationtimestampstart)
- [entityUuid](TeamsServiceCountReq.md#entityuuid)
- [isActive](TeamsServiceCountReq.md#isactive)
- [leadUserId](TeamsServiceCountReq.md#leaduserid)
- [memberUserId](TeamsServiceCountReq.md#memberuserid)
- [modificationTimestampEnd](TeamsServiceCountReq.md#modificationtimestampend)
- [modificationTimestampStart](TeamsServiceCountReq.md#modificationtimestampstart)
- [name](TeamsServiceCountReq.md#name)
- [status](TeamsServiceCountReq.md#status)
- [fields](TeamsServiceCountReq.md#fields)
- [runtime](TeamsServiceCountReq.md#runtime)
- [typeName](TeamsServiceCountReq.md#typename)

### Methods

- [clone](TeamsServiceCountReq.md#clone)
- [equals](TeamsServiceCountReq.md#equals)
- [fromBinary](TeamsServiceCountReq.md#frombinary)
- [fromJson](TeamsServiceCountReq.md#fromjson)
- [fromJsonString](TeamsServiceCountReq.md#fromjsonstring)
- [getType](TeamsServiceCountReq.md#gettype)
- [toBinary](TeamsServiceCountReq.md#tobinary)
- [toJSON](TeamsServiceCountReq.md#tojson)
- [toJson](TeamsServiceCountReq.md#tojson-1)
- [toJsonString](TeamsServiceCountReq.md#tojsonstring)
- [equals](TeamsServiceCountReq.md#equals-1)
- [fromBinary](TeamsServiceCountReq.md#frombinary-1)
- [fromJson](TeamsServiceCountReq.md#fromjson-1)
- [fromJsonString](TeamsServiceCountReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new TeamsServiceCountReq**(`data?`): [`TeamsServiceCountReq`](TeamsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`TeamsServiceCountReq`](TeamsServiceCountReq.md)\> |

#### Returns

[`TeamsServiceCountReq`](TeamsServiceCountReq.md)

#### Overrides

Message\&lt;TeamsServiceCountReq\&gt;.constructor

#### Defined in

[src/teams.scailo_pb.ts:1966](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/teams.scailo_pb.ts#L1966)

## Properties

### approvedByUserId

• `Optional` **approvedByUserId**: `bigint`

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

from field: optional uint64 approved_by_user_id = 13;

#### Defined in

[src/teams.scailo_pb.ts:1852](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/teams.scailo_pb.ts#L1852)

___

### approvedOnEnd

• `Optional` **approvedOnEnd**: `bigint`

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

from field: optional uint64 approved_on_end = 12;

#### Defined in

[src/teams.scailo_pb.ts:1836](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/teams.scailo_pb.ts#L1836)

___

### approvedOnStart

• `Optional` **approvedOnStart**: `bigint`

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

from field: optional uint64 approved_on_start = 11;

#### Defined in

[src/teams.scailo_pb.ts:1820](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/teams.scailo_pb.ts#L1820)

___

### approverRoleId

• `Optional` **approverRoleId**: `bigint`

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

from field: optional uint64 approver_role_id = 14;

#### Defined in

[src/teams.scailo_pb.ts:1868](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/teams.scailo_pb.ts#L1868)

___

### code

• `Optional` **code**: `string`

**`Optional`**

**`Description`**

The unique alphanumeric code used to internally classify and represent the team.

**`Example`**

```ts
"ENG-CORE-01"
```

**`Regex`**

.*

**`Format`**

Must be a non-empty string.

**`Generated`**

from field: optional string code = 21;

#### Defined in

[src/teams.scailo_pb.ts:1932](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/teams.scailo_pb.ts#L1932)

___

### completedOnEnd

• `Optional` **completedOnEnd**: `bigint`

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

from field: optional uint64 completed_on_end = 16;

#### Defined in

[src/teams.scailo_pb.ts:1900](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/teams.scailo_pb.ts#L1900)

___

### completedOnStart

• `Optional` **completedOnStart**: `bigint`

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

from field: optional uint64 completed_on_start = 15;

#### Defined in

[src/teams.scailo_pb.ts:1884](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/teams.scailo_pb.ts#L1884)

___

### creationTimestampEnd

• `Optional` **creationTimestampEnd**: `bigint`

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

from field: optional uint64 creation_timestamp_end = 102;

#### Defined in

[src/teams.scailo_pb.ts:1744](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/teams.scailo_pb.ts#L1744)

___

### creationTimestampStart

• `Optional` **creationTimestampStart**: `bigint`

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

from field: optional uint64 creation_timestamp_start = 101;

#### Defined in

[src/teams.scailo_pb.ts:1728](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/teams.scailo_pb.ts#L1728)

___

### entityUuid

• `Optional` **entityUuid**: `string`

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

from field: optional string entity_uuid = 8;

#### Defined in

[src/teams.scailo_pb.ts:1792](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/teams.scailo_pb.ts#L1792)

___

### isActive

• `Optional` **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md)

**`Optional`**

**`Description`**

Filter by active status. If `true`, then returns only active records. If `false`, then returns only inactive records.

**`Example`**

```ts
ANY
```

**`Generated`**

from field: optional Scailo.BOOL_FILTER is_active = 1;

#### Defined in

[src/teams.scailo_pb.ts:1712](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/teams.scailo_pb.ts#L1712)

___

### leadUserId

• `Optional` **leadUserId**: `bigint`

**`Optional`**

**`Description`**

The unique internal identifier of the user designated as the team lead or manager for this group.

**`Example`**

```ts
402
```

**`Regex`**

^[1-9][0-9]*$

**`Format`**

Unsigned 64-bit integer greater than 0.

**`Generated`**

from field: optional uint64 lead_user_id = 22;

#### Defined in

[src/teams.scailo_pb.ts:1948](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/teams.scailo_pb.ts#L1948)

___

### memberUserId

• `Optional` **memberUserId**: `bigint`

**`Optional`**

**`Description`**

The unique internal identifier of the user designated as the team member that is part of this group.

**`Example`**

```ts
402
```

**`Regex`**

^[1-9][0-9]*$

**`Format`**

Unsigned 64-bit integer greater than 0.

**`Generated`**

from field: optional uint64 member_user_id = 23;

#### Defined in

[src/teams.scailo_pb.ts:1964](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/teams.scailo_pb.ts#L1964)

___

### modificationTimestampEnd

• `Optional` **modificationTimestampEnd**: `bigint`

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

from field: optional uint64 modification_timestamp_end = 104;

#### Defined in

[src/teams.scailo_pb.ts:1776](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/teams.scailo_pb.ts#L1776)

___

### modificationTimestampStart

• `Optional` **modificationTimestampStart**: `bigint`

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

from field: optional uint64 modification_timestamp_start = 103;

#### Defined in

[src/teams.scailo_pb.ts:1760](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/teams.scailo_pb.ts#L1760)

___

### name

• `Optional` **name**: `string`

**`Optional`**

**`Description`**

The primary, human-readable name of the team.

**`Example`**

```ts
"Core Backend Engineering"
```

**`Regex`**

.*

**`Format`**

Must be a non-empty string.

**`Generated`**

from field: optional string name = 20;

#### Defined in

[src/teams.scailo_pb.ts:1916](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/teams.scailo_pb.ts#L1916)

___

### status

• `Optional` **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md)

**`Optional`**

**`Description`**

Filter by lifecycle status (e.g., DRAFT, STANDING).

**`Example`**

```ts
STANDING
```

**`Generated`**

from field: optional Scailo.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

[src/teams.scailo_pb.ts:1804](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/teams.scailo_pb.ts#L1804)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/teams.scailo_pb.ts:1973](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/teams.scailo_pb.ts#L1973)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/teams.scailo_pb.ts:1971](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/teams.scailo_pb.ts#L1971)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.TeamsServiceCountReq"``

#### Defined in

[src/teams.scailo_pb.ts:1972](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/teams.scailo_pb.ts#L1972)

## Methods

### clone

▸ **clone**(): [`TeamsServiceCountReq`](TeamsServiceCountReq.md)

Create a deep copy.

#### Returns

[`TeamsServiceCountReq`](TeamsServiceCountReq.md)

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
| `other` | `undefined` \| ``null`` \| [`TeamsServiceCountReq`](TeamsServiceCountReq.md) \| `PlainMessage`\<[`TeamsServiceCountReq`](TeamsServiceCountReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`TeamsServiceCountReq`](TeamsServiceCountReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`TeamsServiceCountReq`](TeamsServiceCountReq.md)\>

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
| `a` | `undefined` \| [`TeamsServiceCountReq`](TeamsServiceCountReq.md) \| `PlainMessage`\<[`TeamsServiceCountReq`](TeamsServiceCountReq.md)\> |
| `b` | `undefined` \| [`TeamsServiceCountReq`](TeamsServiceCountReq.md) \| `PlainMessage`\<[`TeamsServiceCountReq`](TeamsServiceCountReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/teams.scailo_pb.ts:2005](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/teams.scailo_pb.ts#L2005)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`TeamsServiceCountReq`](TeamsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`TeamsServiceCountReq`](TeamsServiceCountReq.md)

#### Defined in

[src/teams.scailo_pb.ts:1993](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/teams.scailo_pb.ts#L1993)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`TeamsServiceCountReq`](TeamsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`TeamsServiceCountReq`](TeamsServiceCountReq.md)

#### Defined in

[src/teams.scailo_pb.ts:1997](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/teams.scailo_pb.ts#L1997)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`TeamsServiceCountReq`](TeamsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`TeamsServiceCountReq`](TeamsServiceCountReq.md)

#### Defined in

[src/teams.scailo_pb.ts:2001](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/teams.scailo_pb.ts#L2001)
