[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ReplaceableIndentsServiceCountReq

# Class: ReplaceableIndentsServiceCountReq

Describes the base request payload of a count search

**`Generated`**

from message Scailo.ReplaceableIndentsServiceCountReq

## Hierarchy

- `Message`\<[`ReplaceableIndentsServiceCountReq`](ReplaceableIndentsServiceCountReq.md)\>

  ↳ **`ReplaceableIndentsServiceCountReq`**

## Table of contents

### Constructors

- [constructor](ReplaceableIndentsServiceCountReq.md#constructor)

### Properties

- [approvedByUserId](ReplaceableIndentsServiceCountReq.md#approvedbyuserid)
- [approvedOnEnd](ReplaceableIndentsServiceCountReq.md#approvedonend)
- [approvedOnStart](ReplaceableIndentsServiceCountReq.md#approvedonstart)
- [approverRoleId](ReplaceableIndentsServiceCountReq.md#approverroleid)
- [completedOnEnd](ReplaceableIndentsServiceCountReq.md#completedonend)
- [completedOnStart](ReplaceableIndentsServiceCountReq.md#completedonstart)
- [constituentFamilyId](ReplaceableIndentsServiceCountReq.md#constituentfamilyid)
- [creationTimestampEnd](ReplaceableIndentsServiceCountReq.md#creationtimestampend)
- [creationTimestampStart](ReplaceableIndentsServiceCountReq.md#creationtimestampstart)
- [entityUuid](ReplaceableIndentsServiceCountReq.md#entityuuid)
- [familyId](ReplaceableIndentsServiceCountReq.md#familyid)
- [finalRefNumber](ReplaceableIndentsServiceCountReq.md#finalrefnumber)
- [formData](ReplaceableIndentsServiceCountReq.md#formdata)
- [isActive](ReplaceableIndentsServiceCountReq.md#isactive)
- [itemHash](ReplaceableIndentsServiceCountReq.md#itemhash)
- [locationId](ReplaceableIndentsServiceCountReq.md#locationid)
- [modificationTimestampEnd](ReplaceableIndentsServiceCountReq.md#modificationtimestampend)
- [modificationTimestampStart](ReplaceableIndentsServiceCountReq.md#modificationtimestampstart)
- [referenceId](ReplaceableIndentsServiceCountReq.md#referenceid)
- [status](ReplaceableIndentsServiceCountReq.md#status)
- [supervisor](ReplaceableIndentsServiceCountReq.md#supervisor)
- [fields](ReplaceableIndentsServiceCountReq.md#fields)
- [runtime](ReplaceableIndentsServiceCountReq.md#runtime)
- [typeName](ReplaceableIndentsServiceCountReq.md#typename)

### Methods

- [clone](ReplaceableIndentsServiceCountReq.md#clone)
- [equals](ReplaceableIndentsServiceCountReq.md#equals)
- [fromBinary](ReplaceableIndentsServiceCountReq.md#frombinary)
- [fromJson](ReplaceableIndentsServiceCountReq.md#fromjson)
- [fromJsonString](ReplaceableIndentsServiceCountReq.md#fromjsonstring)
- [getType](ReplaceableIndentsServiceCountReq.md#gettype)
- [toBinary](ReplaceableIndentsServiceCountReq.md#tobinary)
- [toJSON](ReplaceableIndentsServiceCountReq.md#tojson)
- [toJson](ReplaceableIndentsServiceCountReq.md#tojson-1)
- [toJsonString](ReplaceableIndentsServiceCountReq.md#tojsonstring)
- [equals](ReplaceableIndentsServiceCountReq.md#equals-1)
- [fromBinary](ReplaceableIndentsServiceCountReq.md#frombinary-1)
- [fromJson](ReplaceableIndentsServiceCountReq.md#fromjson-1)
- [fromJsonString](ReplaceableIndentsServiceCountReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new ReplaceableIndentsServiceCountReq**(`data?`): [`ReplaceableIndentsServiceCountReq`](ReplaceableIndentsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ReplaceableIndentsServiceCountReq`](ReplaceableIndentsServiceCountReq.md)\> |

#### Returns

[`ReplaceableIndentsServiceCountReq`](ReplaceableIndentsServiceCountReq.md)

#### Overrides

Message\&lt;ReplaceableIndentsServiceCountReq\&gt;.constructor

#### Defined in

[src/replaceable_indents.scailo_pb.ts:1982](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/replaceable_indents.scailo_pb.ts#L1982)

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

[src/replaceable_indents.scailo_pb.ts:1858](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/replaceable_indents.scailo_pb.ts#L1858)

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

[src/replaceable_indents.scailo_pb.ts:1842](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/replaceable_indents.scailo_pb.ts#L1842)

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

[src/replaceable_indents.scailo_pb.ts:1826](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/replaceable_indents.scailo_pb.ts#L1826)

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

[src/replaceable_indents.scailo_pb.ts:1874](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/replaceable_indents.scailo_pb.ts#L1874)

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

[src/replaceable_indents.scailo_pb.ts:1906](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/replaceable_indents.scailo_pb.ts#L1906)

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

[src/replaceable_indents.scailo_pb.ts:1890](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/replaceable_indents.scailo_pb.ts#L1890)

___

### constituentFamilyId

• **constituentFamilyId**: `bigint` = `protoInt64.zero`

The ID of the constituent family that is part of a replaceable indent

**`Generated`**

from field: uint64 constituent_family_id = 40;

#### Defined in

[src/replaceable_indents.scailo_pb.ts:1973](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/replaceable_indents.scailo_pb.ts#L1973)

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

[src/replaceable_indents.scailo_pb.ts:1750](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/replaceable_indents.scailo_pb.ts#L1750)

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

[src/replaceable_indents.scailo_pb.ts:1734](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/replaceable_indents.scailo_pb.ts#L1734)

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

[src/replaceable_indents.scailo_pb.ts:1798](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/replaceable_indents.scailo_pb.ts#L1798)

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

The ID of the family

**`Generated`**

from field: uint64 family_id = 25;

#### Defined in

[src/replaceable_indents.scailo_pb.ts:1959](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/replaceable_indents.scailo_pb.ts#L1959)

___

### finalRefNumber

• **finalRefNumber**: `string` = `""`

**`Optional`**

**`Description`**

Fuzzy match for the system-generated ref number.

**`Example`**

```ts
"ABS-2023-X9Z2"
```

**`Regex`**

[0-9A-Za-z ]*$

@format: Alphanumeric characters and spaces only. Can be left empty.

**`Generated`**

from field: string final_ref_number = 21;

#### Defined in

[src/replaceable_indents.scailo_pb.ts:1938](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/replaceable_indents.scailo_pb.ts#L1938)

___

### formData

• **formData**: [`FormFieldDatumFilterRequest`](FormFieldDatumFilterRequest.md)[] = `[]`

The list of form data filters

**`Generated`**

from field: repeated Scailo.FormFieldDatumFilterRequest form_data = 500;

#### Defined in

[src/replaceable_indents.scailo_pb.ts:1980](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/replaceable_indents.scailo_pb.ts#L1980)

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

[src/replaceable_indents.scailo_pb.ts:1718](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/replaceable_indents.scailo_pb.ts#L1718)

___

### itemHash

• **itemHash**: `string` = `""`

The hash of the inventory item

**`Generated`**

from field: string item_hash = 26;

#### Defined in

[src/replaceable_indents.scailo_pb.ts:1966](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/replaceable_indents.scailo_pb.ts#L1966)

___

### locationId

• **locationId**: `bigint` = `protoInt64.zero`

The ID of the location

**`Generated`**

from field: uint64 location_id = 23;

#### Defined in

[src/replaceable_indents.scailo_pb.ts:1945](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/replaceable_indents.scailo_pb.ts#L1945)

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

[src/replaceable_indents.scailo_pb.ts:1782](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/replaceable_indents.scailo_pb.ts#L1782)

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

[src/replaceable_indents.scailo_pb.ts:1766](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/replaceable_indents.scailo_pb.ts#L1766)

___

### referenceId

• **referenceId**: `string` = `""`

**`Optional`**

**`Description`**

Fuzzy match for the user-defined reference ID.

**`Example`**

```ts
"ABS-2023-001"
```

**`Regex`**

[0-9A-Za-z ]*$

@format: Alphanumeric characters and spaces only. Can be left empty.

**`Generated`**

from field: string reference_id = 20;

#### Defined in

[src/replaceable_indents.scailo_pb.ts:1922](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/replaceable_indents.scailo_pb.ts#L1922)

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

[src/replaceable_indents.scailo_pb.ts:1810](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/replaceable_indents.scailo_pb.ts#L1810)

___

### supervisor

• **supervisor**: `string` = `""`

The username of the supervisor

**`Generated`**

from field: string supervisor = 24;

#### Defined in

[src/replaceable_indents.scailo_pb.ts:1952](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/replaceable_indents.scailo_pb.ts#L1952)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/replaceable_indents.scailo_pb.ts:1989](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/replaceable_indents.scailo_pb.ts#L1989)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/replaceable_indents.scailo_pb.ts:1987](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/replaceable_indents.scailo_pb.ts#L1987)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ReplaceableIndentsServiceCountReq"``

#### Defined in

[src/replaceable_indents.scailo_pb.ts:1988](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/replaceable_indents.scailo_pb.ts#L1988)

## Methods

### clone

▸ **clone**(): [`ReplaceableIndentsServiceCountReq`](ReplaceableIndentsServiceCountReq.md)

Create a deep copy.

#### Returns

[`ReplaceableIndentsServiceCountReq`](ReplaceableIndentsServiceCountReq.md)

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
| `other` | `undefined` \| ``null`` \| [`ReplaceableIndentsServiceCountReq`](ReplaceableIndentsServiceCountReq.md) \| `PlainMessage`\<[`ReplaceableIndentsServiceCountReq`](ReplaceableIndentsServiceCountReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`ReplaceableIndentsServiceCountReq`](ReplaceableIndentsServiceCountReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ReplaceableIndentsServiceCountReq`](ReplaceableIndentsServiceCountReq.md)\>

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
| `a` | `undefined` \| [`ReplaceableIndentsServiceCountReq`](ReplaceableIndentsServiceCountReq.md) \| `PlainMessage`\<[`ReplaceableIndentsServiceCountReq`](ReplaceableIndentsServiceCountReq.md)\> |
| `b` | `undefined` \| [`ReplaceableIndentsServiceCountReq`](ReplaceableIndentsServiceCountReq.md) \| `PlainMessage`\<[`ReplaceableIndentsServiceCountReq`](ReplaceableIndentsServiceCountReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/replaceable_indents.scailo_pb.ts:2025](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/replaceable_indents.scailo_pb.ts#L2025)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ReplaceableIndentsServiceCountReq`](ReplaceableIndentsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ReplaceableIndentsServiceCountReq`](ReplaceableIndentsServiceCountReq.md)

#### Defined in

[src/replaceable_indents.scailo_pb.ts:2013](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/replaceable_indents.scailo_pb.ts#L2013)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ReplaceableIndentsServiceCountReq`](ReplaceableIndentsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ReplaceableIndentsServiceCountReq`](ReplaceableIndentsServiceCountReq.md)

#### Defined in

[src/replaceable_indents.scailo_pb.ts:2017](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/replaceable_indents.scailo_pb.ts#L2017)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ReplaceableIndentsServiceCountReq`](ReplaceableIndentsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ReplaceableIndentsServiceCountReq`](ReplaceableIndentsServiceCountReq.md)

#### Defined in

[src/replaceable_indents.scailo_pb.ts:2021](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/replaceable_indents.scailo_pb.ts#L2021)
