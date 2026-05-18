[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / LocationsServiceCountReq

# Class: LocationsServiceCountReq

Describes the base request payload of a count search

**`Generated`**

from message Scailo.LocationsServiceCountReq

## Hierarchy

- `Message`\<[`LocationsServiceCountReq`](LocationsServiceCountReq.md)\>

  ↳ **`LocationsServiceCountReq`**

## Table of contents

### Constructors

- [constructor](LocationsServiceCountReq.md#constructor)

### Properties

- [approvedByUserId](LocationsServiceCountReq.md#approvedbyuserid)
- [approvedOnEnd](LocationsServiceCountReq.md#approvedonend)
- [approvedOnStart](LocationsServiceCountReq.md#approvedonstart)
- [approverRoleId](LocationsServiceCountReq.md#approverroleid)
- [code](LocationsServiceCountReq.md#code)
- [creationTimestampEnd](LocationsServiceCountReq.md#creationtimestampend)
- [creationTimestampStart](LocationsServiceCountReq.md#creationtimestampstart)
- [email](LocationsServiceCountReq.md#email)
- [entityUuid](LocationsServiceCountReq.md#entityuuid)
- [formData](LocationsServiceCountReq.md#formdata)
- [isActive](LocationsServiceCountReq.md#isactive)
- [isLeaf](LocationsServiceCountReq.md#isleaf)
- [modificationTimestampEnd](LocationsServiceCountReq.md#modificationtimestampend)
- [modificationTimestampStart](LocationsServiceCountReq.md#modificationtimestampstart)
- [name](LocationsServiceCountReq.md#name)
- [parentLocationId](LocationsServiceCountReq.md#parentlocationid)
- [phone](LocationsServiceCountReq.md#phone)
- [status](LocationsServiceCountReq.md#status)
- [fields](LocationsServiceCountReq.md#fields)
- [runtime](LocationsServiceCountReq.md#runtime)
- [typeName](LocationsServiceCountReq.md#typename)

### Methods

- [clone](LocationsServiceCountReq.md#clone)
- [equals](LocationsServiceCountReq.md#equals)
- [fromBinary](LocationsServiceCountReq.md#frombinary)
- [fromJson](LocationsServiceCountReq.md#fromjson)
- [fromJsonString](LocationsServiceCountReq.md#fromjsonstring)
- [getType](LocationsServiceCountReq.md#gettype)
- [toBinary](LocationsServiceCountReq.md#tobinary)
- [toJSON](LocationsServiceCountReq.md#tojson)
- [toJson](LocationsServiceCountReq.md#tojson-1)
- [toJsonString](LocationsServiceCountReq.md#tojsonstring)
- [equals](LocationsServiceCountReq.md#equals-1)
- [fromBinary](LocationsServiceCountReq.md#frombinary-1)
- [fromJson](LocationsServiceCountReq.md#fromjson-1)
- [fromJsonString](LocationsServiceCountReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new LocationsServiceCountReq**(`data?`): [`LocationsServiceCountReq`](LocationsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`LocationsServiceCountReq`](LocationsServiceCountReq.md)\> |

#### Returns

[`LocationsServiceCountReq`](LocationsServiceCountReq.md)

#### Overrides

Message\&lt;LocationsServiceCountReq\&gt;.constructor

#### Defined in

[src/locations.scailo_pb.ts:1253](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/locations.scailo_pb.ts#L1253)

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

[src/locations.scailo_pb.ts:1186](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/locations.scailo_pb.ts#L1186)

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

[src/locations.scailo_pb.ts:1170](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/locations.scailo_pb.ts#L1170)

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

[src/locations.scailo_pb.ts:1154](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/locations.scailo_pb.ts#L1154)

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

[src/locations.scailo_pb.ts:1202](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/locations.scailo_pb.ts#L1202)

___

### code

• **code**: `string` = `""`

The unique code by which the location is classified

**`Generated`**

from field: string code = 21;

#### Defined in

[src/locations.scailo_pb.ts:1216](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/locations.scailo_pb.ts#L1216)

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

[src/locations.scailo_pb.ts:1078](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/locations.scailo_pb.ts#L1078)

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

[src/locations.scailo_pb.ts:1062](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/locations.scailo_pb.ts#L1062)

___

### email

• **email**: `string` = `""`

The primary email of the location

**`Generated`**

from field: string email = 22;

#### Defined in

[src/locations.scailo_pb.ts:1223](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/locations.scailo_pb.ts#L1223)

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

[src/locations.scailo_pb.ts:1126](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/locations.scailo_pb.ts#L1126)

___

### formData

• **formData**: [`FormFieldDatumFilterRequest`](FormFieldDatumFilterRequest.md)[] = `[]`

The list of form data filters

**`Generated`**

from field: repeated Scailo.FormFieldDatumFilterRequest form_data = 500;

#### Defined in

[src/locations.scailo_pb.ts:1251](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/locations.scailo_pb.ts#L1251)

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

[src/locations.scailo_pb.ts:1046](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/locations.scailo_pb.ts#L1046)

___

### isLeaf

• **isLeaf**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

Stores if this is a leaf location or a non-leaf location

**`Generated`**

from field: Scailo.BOOL_FILTER is_leaf = 25;

#### Defined in

[src/locations.scailo_pb.ts:1244](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/locations.scailo_pb.ts#L1244)

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

[src/locations.scailo_pb.ts:1110](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/locations.scailo_pb.ts#L1110)

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

[src/locations.scailo_pb.ts:1094](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/locations.scailo_pb.ts#L1094)

___

### name

• **name**: `string` = `""`

The name of the location

**`Generated`**

from field: string name = 20;

#### Defined in

[src/locations.scailo_pb.ts:1209](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/locations.scailo_pb.ts#L1209)

___

### parentLocationId

• **parentLocationId**: `bigint` = `protoInt64.zero`

The ID of the associated non-leaf parent location (0, if the first location that is being created is a leaf location)

**`Generated`**

from field: uint64 parent_location_id = 24;

#### Defined in

[src/locations.scailo_pb.ts:1237](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/locations.scailo_pb.ts#L1237)

___

### phone

• **phone**: `string` = `""`

The primary contact number of the location

**`Generated`**

from field: string phone = 23;

#### Defined in

[src/locations.scailo_pb.ts:1230](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/locations.scailo_pb.ts#L1230)

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

[src/locations.scailo_pb.ts:1138](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/locations.scailo_pb.ts#L1138)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/locations.scailo_pb.ts:1260](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/locations.scailo_pb.ts#L1260)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/locations.scailo_pb.ts:1258](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/locations.scailo_pb.ts#L1258)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.LocationsServiceCountReq"``

#### Defined in

[src/locations.scailo_pb.ts:1259](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/locations.scailo_pb.ts#L1259)

## Methods

### clone

▸ **clone**(): [`LocationsServiceCountReq`](LocationsServiceCountReq.md)

Create a deep copy.

#### Returns

[`LocationsServiceCountReq`](LocationsServiceCountReq.md)

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
| `other` | `undefined` \| ``null`` \| [`LocationsServiceCountReq`](LocationsServiceCountReq.md) \| `PlainMessage`\<[`LocationsServiceCountReq`](LocationsServiceCountReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`LocationsServiceCountReq`](LocationsServiceCountReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`LocationsServiceCountReq`](LocationsServiceCountReq.md)\>

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
| `a` | `undefined` \| [`LocationsServiceCountReq`](LocationsServiceCountReq.md) \| `PlainMessage`\<[`LocationsServiceCountReq`](LocationsServiceCountReq.md)\> |
| `b` | `undefined` \| [`LocationsServiceCountReq`](LocationsServiceCountReq.md) \| `PlainMessage`\<[`LocationsServiceCountReq`](LocationsServiceCountReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/locations.scailo_pb.ts:1293](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/locations.scailo_pb.ts#L1293)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`LocationsServiceCountReq`](LocationsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`LocationsServiceCountReq`](LocationsServiceCountReq.md)

#### Defined in

[src/locations.scailo_pb.ts:1281](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/locations.scailo_pb.ts#L1281)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`LocationsServiceCountReq`](LocationsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`LocationsServiceCountReq`](LocationsServiceCountReq.md)

#### Defined in

[src/locations.scailo_pb.ts:1285](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/locations.scailo_pb.ts#L1285)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`LocationsServiceCountReq`](LocationsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`LocationsServiceCountReq`](LocationsServiceCountReq.md)

#### Defined in

[src/locations.scailo_pb.ts:1289](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/locations.scailo_pb.ts#L1289)
