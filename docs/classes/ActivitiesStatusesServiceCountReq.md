[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ActivitiesStatusesServiceCountReq

# Class: ActivitiesStatusesServiceCountReq

Describes the base request payload of a count search

**`Generated`**

from message Scailo.ActivitiesStatusesServiceCountReq

## Hierarchy

- `Message`\<[`ActivitiesStatusesServiceCountReq`](ActivitiesStatusesServiceCountReq.md)\>

  ↳ **`ActivitiesStatusesServiceCountReq`**

## Table of contents

### Constructors

- [constructor](ActivitiesStatusesServiceCountReq.md#constructor)

### Properties

- [approvedByUserId](ActivitiesStatusesServiceCountReq.md#approvedbyuserid)
- [approvedOnEnd](ActivitiesStatusesServiceCountReq.md#approvedonend)
- [approvedOnStart](ActivitiesStatusesServiceCountReq.md#approvedonstart)
- [approverRoleId](ActivitiesStatusesServiceCountReq.md#approverroleid)
- [bgColor](ActivitiesStatusesServiceCountReq.md#bgcolor)
- [code](ActivitiesStatusesServiceCountReq.md#code)
- [creationTimestampEnd](ActivitiesStatusesServiceCountReq.md#creationtimestampend)
- [creationTimestampStart](ActivitiesStatusesServiceCountReq.md#creationtimestampstart)
- [entityUuid](ActivitiesStatusesServiceCountReq.md#entityuuid)
- [fgColor](ActivitiesStatusesServiceCountReq.md#fgcolor)
- [isActive](ActivitiesStatusesServiceCountReq.md#isactive)
- [modificationTimestampEnd](ActivitiesStatusesServiceCountReq.md#modificationtimestampend)
- [modificationTimestampStart](ActivitiesStatusesServiceCountReq.md#modificationtimestampstart)
- [name](ActivitiesStatusesServiceCountReq.md#name)
- [status](ActivitiesStatusesServiceCountReq.md#status)
- [fields](ActivitiesStatusesServiceCountReq.md#fields)
- [runtime](ActivitiesStatusesServiceCountReq.md#runtime)
- [typeName](ActivitiesStatusesServiceCountReq.md#typename)

### Methods

- [clone](ActivitiesStatusesServiceCountReq.md#clone)
- [equals](ActivitiesStatusesServiceCountReq.md#equals)
- [fromBinary](ActivitiesStatusesServiceCountReq.md#frombinary)
- [fromJson](ActivitiesStatusesServiceCountReq.md#fromjson)
- [fromJsonString](ActivitiesStatusesServiceCountReq.md#fromjsonstring)
- [getType](ActivitiesStatusesServiceCountReq.md#gettype)
- [toBinary](ActivitiesStatusesServiceCountReq.md#tobinary)
- [toJSON](ActivitiesStatusesServiceCountReq.md#tojson)
- [toJson](ActivitiesStatusesServiceCountReq.md#tojson-1)
- [toJsonString](ActivitiesStatusesServiceCountReq.md#tojsonstring)
- [equals](ActivitiesStatusesServiceCountReq.md#equals-1)
- [fromBinary](ActivitiesStatusesServiceCountReq.md#frombinary-1)
- [fromJson](ActivitiesStatusesServiceCountReq.md#fromjson-1)
- [fromJsonString](ActivitiesStatusesServiceCountReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new ActivitiesStatusesServiceCountReq**(`data?`): [`ActivitiesStatusesServiceCountReq`](ActivitiesStatusesServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ActivitiesStatusesServiceCountReq`](ActivitiesStatusesServiceCountReq.md)\> |

#### Returns

[`ActivitiesStatusesServiceCountReq`](ActivitiesStatusesServiceCountReq.md)

#### Overrides

Message\&lt;ActivitiesStatusesServiceCountReq\&gt;.constructor

#### Defined in

[src/activities_statuses.scailo_pb.ts:1137](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/activities_statuses.scailo_pb.ts#L1137)

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

[src/activities_statuses.scailo_pb.ts:1091](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/activities_statuses.scailo_pb.ts#L1091)

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

[src/activities_statuses.scailo_pb.ts:1075](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/activities_statuses.scailo_pb.ts#L1075)

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

[src/activities_statuses.scailo_pb.ts:1059](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/activities_statuses.scailo_pb.ts#L1059)

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

[src/activities_statuses.scailo_pb.ts:1107](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/activities_statuses.scailo_pb.ts#L1107)

___

### bgColor

• **bgColor**: `string` = `""`

The background color that is displayed for easy recognition

**`Generated`**

from field: string bg_color = 23;

#### Defined in

[src/activities_statuses.scailo_pb.ts:1135](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/activities_statuses.scailo_pb.ts#L1135)

___

### code

• **code**: `string` = `""`

The unique code by which the activity status is classified

**`Generated`**

from field: string code = 21;

#### Defined in

[src/activities_statuses.scailo_pb.ts:1121](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/activities_statuses.scailo_pb.ts#L1121)

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

[src/activities_statuses.scailo_pb.ts:983](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/activities_statuses.scailo_pb.ts#L983)

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

[src/activities_statuses.scailo_pb.ts:967](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/activities_statuses.scailo_pb.ts#L967)

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

[src/activities_statuses.scailo_pb.ts:1031](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/activities_statuses.scailo_pb.ts#L1031)

___

### fgColor

• **fgColor**: `string` = `""`

The color of the text that is displayed for easy recognition

**`Generated`**

from field: string fg_color = 22;

#### Defined in

[src/activities_statuses.scailo_pb.ts:1128](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/activities_statuses.scailo_pb.ts#L1128)

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

[src/activities_statuses.scailo_pb.ts:951](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/activities_statuses.scailo_pb.ts#L951)

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

[src/activities_statuses.scailo_pb.ts:1015](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/activities_statuses.scailo_pb.ts#L1015)

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

[src/activities_statuses.scailo_pb.ts:999](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/activities_statuses.scailo_pb.ts#L999)

___

### name

• **name**: `string` = `""`

The name of the activity status

**`Generated`**

from field: string name = 20;

#### Defined in

[src/activities_statuses.scailo_pb.ts:1114](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/activities_statuses.scailo_pb.ts#L1114)

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

[src/activities_statuses.scailo_pb.ts:1043](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/activities_statuses.scailo_pb.ts#L1043)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/activities_statuses.scailo_pb.ts:1144](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/activities_statuses.scailo_pb.ts#L1144)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/activities_statuses.scailo_pb.ts:1142](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/activities_statuses.scailo_pb.ts#L1142)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ActivitiesStatusesServiceCountReq"``

#### Defined in

[src/activities_statuses.scailo_pb.ts:1143](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/activities_statuses.scailo_pb.ts#L1143)

## Methods

### clone

▸ **clone**(): [`ActivitiesStatusesServiceCountReq`](ActivitiesStatusesServiceCountReq.md)

Create a deep copy.

#### Returns

[`ActivitiesStatusesServiceCountReq`](ActivitiesStatusesServiceCountReq.md)

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
| `other` | `undefined` \| ``null`` \| [`ActivitiesStatusesServiceCountReq`](ActivitiesStatusesServiceCountReq.md) \| `PlainMessage`\<[`ActivitiesStatusesServiceCountReq`](ActivitiesStatusesServiceCountReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`ActivitiesStatusesServiceCountReq`](ActivitiesStatusesServiceCountReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ActivitiesStatusesServiceCountReq`](ActivitiesStatusesServiceCountReq.md)\>

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
| `a` | `undefined` \| [`ActivitiesStatusesServiceCountReq`](ActivitiesStatusesServiceCountReq.md) \| `PlainMessage`\<[`ActivitiesStatusesServiceCountReq`](ActivitiesStatusesServiceCountReq.md)\> |
| `b` | `undefined` \| [`ActivitiesStatusesServiceCountReq`](ActivitiesStatusesServiceCountReq.md) \| `PlainMessage`\<[`ActivitiesStatusesServiceCountReq`](ActivitiesStatusesServiceCountReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/activities_statuses.scailo_pb.ts:1174](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/activities_statuses.scailo_pb.ts#L1174)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ActivitiesStatusesServiceCountReq`](ActivitiesStatusesServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ActivitiesStatusesServiceCountReq`](ActivitiesStatusesServiceCountReq.md)

#### Defined in

[src/activities_statuses.scailo_pb.ts:1162](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/activities_statuses.scailo_pb.ts#L1162)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ActivitiesStatusesServiceCountReq`](ActivitiesStatusesServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ActivitiesStatusesServiceCountReq`](ActivitiesStatusesServiceCountReq.md)

#### Defined in

[src/activities_statuses.scailo_pb.ts:1166](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/activities_statuses.scailo_pb.ts#L1166)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ActivitiesStatusesServiceCountReq`](ActivitiesStatusesServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ActivitiesStatusesServiceCountReq`](ActivitiesStatusesServiceCountReq.md)

#### Defined in

[src/activities_statuses.scailo_pb.ts:1170](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/activities_statuses.scailo_pb.ts#L1170)
