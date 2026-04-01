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

[src/locations.scailo_pb.ts:1236](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/locations.scailo_pb.ts#L1236)

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

[src/locations.scailo_pb.ts:1169](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/locations.scailo_pb.ts#L1169)

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

[src/locations.scailo_pb.ts:1153](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/locations.scailo_pb.ts#L1153)

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

[src/locations.scailo_pb.ts:1137](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/locations.scailo_pb.ts#L1137)

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

[src/locations.scailo_pb.ts:1185](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/locations.scailo_pb.ts#L1185)

___

### code

• **code**: `string` = `""`

The unique code by which the location is classified

**`Generated`**

from field: string code = 21;

#### Defined in

[src/locations.scailo_pb.ts:1199](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/locations.scailo_pb.ts#L1199)

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

[src/locations.scailo_pb.ts:1061](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/locations.scailo_pb.ts#L1061)

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

[src/locations.scailo_pb.ts:1045](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/locations.scailo_pb.ts#L1045)

___

### email

• **email**: `string` = `""`

The primary email of the location

**`Generated`**

from field: string email = 22;

#### Defined in

[src/locations.scailo_pb.ts:1206](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/locations.scailo_pb.ts#L1206)

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

[src/locations.scailo_pb.ts:1109](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/locations.scailo_pb.ts#L1109)

___

### formData

• **formData**: [`FormFieldDatumFilterRequest`](FormFieldDatumFilterRequest.md)[] = `[]`

The list of form data filters

**`Generated`**

from field: repeated Scailo.FormFieldDatumFilterRequest form_data = 500;

#### Defined in

[src/locations.scailo_pb.ts:1234](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/locations.scailo_pb.ts#L1234)

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

[src/locations.scailo_pb.ts:1029](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/locations.scailo_pb.ts#L1029)

___

### isLeaf

• **isLeaf**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

Stores if this is a leaf location or a non-leaf location

**`Generated`**

from field: Scailo.BOOL_FILTER is_leaf = 25;

#### Defined in

[src/locations.scailo_pb.ts:1227](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/locations.scailo_pb.ts#L1227)

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

[src/locations.scailo_pb.ts:1093](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/locations.scailo_pb.ts#L1093)

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

[src/locations.scailo_pb.ts:1077](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/locations.scailo_pb.ts#L1077)

___

### name

• **name**: `string` = `""`

The name of the location

**`Generated`**

from field: string name = 20;

#### Defined in

[src/locations.scailo_pb.ts:1192](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/locations.scailo_pb.ts#L1192)

___

### parentLocationId

• **parentLocationId**: `bigint` = `protoInt64.zero`

The ID of the associated non-leaf parent location (0, if the first location that is being created is a leaf location)

**`Generated`**

from field: uint64 parent_location_id = 24;

#### Defined in

[src/locations.scailo_pb.ts:1220](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/locations.scailo_pb.ts#L1220)

___

### phone

• **phone**: `string` = `""`

The primary contact number of the location

**`Generated`**

from field: string phone = 23;

#### Defined in

[src/locations.scailo_pb.ts:1213](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/locations.scailo_pb.ts#L1213)

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

[src/locations.scailo_pb.ts:1121](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/locations.scailo_pb.ts#L1121)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/locations.scailo_pb.ts:1243](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/locations.scailo_pb.ts#L1243)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/locations.scailo_pb.ts:1241](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/locations.scailo_pb.ts#L1241)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.LocationsServiceCountReq"``

#### Defined in

[src/locations.scailo_pb.ts:1242](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/locations.scailo_pb.ts#L1242)

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

[src/locations.scailo_pb.ts:1276](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/locations.scailo_pb.ts#L1276)

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

[src/locations.scailo_pb.ts:1264](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/locations.scailo_pb.ts#L1264)

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

[src/locations.scailo_pb.ts:1268](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/locations.scailo_pb.ts#L1268)

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

[src/locations.scailo_pb.ts:1272](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/locations.scailo_pb.ts#L1272)
