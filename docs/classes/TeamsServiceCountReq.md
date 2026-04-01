[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / TeamsServiceCountReq

# Class: TeamsServiceCountReq

Describes the base request payload of a count search

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

[src/teams.scailo_pb.ts:1673](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/teams.scailo_pb.ts#L1673)

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

[src/teams.scailo_pb.ts:1595](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/teams.scailo_pb.ts#L1595)

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

[src/teams.scailo_pb.ts:1579](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/teams.scailo_pb.ts#L1579)

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

[src/teams.scailo_pb.ts:1563](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/teams.scailo_pb.ts#L1563)

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

[src/teams.scailo_pb.ts:1611](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/teams.scailo_pb.ts#L1611)

___

### code

• **code**: `string` = `""`

The code of the team

**`Generated`**

from field: string code = 21;

#### Defined in

[src/teams.scailo_pb.ts:1657](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/teams.scailo_pb.ts#L1657)

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

[src/teams.scailo_pb.ts:1643](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/teams.scailo_pb.ts#L1643)

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

[src/teams.scailo_pb.ts:1627](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/teams.scailo_pb.ts#L1627)

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

[src/teams.scailo_pb.ts:1487](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/teams.scailo_pb.ts#L1487)

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

[src/teams.scailo_pb.ts:1471](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/teams.scailo_pb.ts#L1471)

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

[src/teams.scailo_pb.ts:1535](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/teams.scailo_pb.ts#L1535)

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

[src/teams.scailo_pb.ts:1455](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/teams.scailo_pb.ts#L1455)

___

### leadUserId

• **leadUserId**: `bigint` = `protoInt64.zero`

The ID of the leader

**`Generated`**

from field: uint64 lead_user_id = 22;

#### Defined in

[src/teams.scailo_pb.ts:1664](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/teams.scailo_pb.ts#L1664)

___

### memberUserId

• **memberUserId**: `bigint` = `protoInt64.zero`

The ID of the member

**`Generated`**

from field: uint64 member_user_id = 23;

#### Defined in

[src/teams.scailo_pb.ts:1671](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/teams.scailo_pb.ts#L1671)

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

[src/teams.scailo_pb.ts:1519](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/teams.scailo_pb.ts#L1519)

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

[src/teams.scailo_pb.ts:1503](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/teams.scailo_pb.ts#L1503)

___

### name

• **name**: `string` = `""`

The name of the team

**`Generated`**

from field: string name = 20;

#### Defined in

[src/teams.scailo_pb.ts:1650](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/teams.scailo_pb.ts#L1650)

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

[src/teams.scailo_pb.ts:1547](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/teams.scailo_pb.ts#L1547)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/teams.scailo_pb.ts:1680](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/teams.scailo_pb.ts#L1680)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/teams.scailo_pb.ts:1678](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/teams.scailo_pb.ts#L1678)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.TeamsServiceCountReq"``

#### Defined in

[src/teams.scailo_pb.ts:1679](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/teams.scailo_pb.ts#L1679)

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

[src/teams.scailo_pb.ts:1712](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/teams.scailo_pb.ts#L1712)

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

[src/teams.scailo_pb.ts:1700](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/teams.scailo_pb.ts#L1700)

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

[src/teams.scailo_pb.ts:1704](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/teams.scailo_pb.ts#L1704)

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

[src/teams.scailo_pb.ts:1708](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/teams.scailo_pb.ts#L1708)
