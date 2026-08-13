[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / VendorsServiceCountReq

# Class: VendorsServiceCountReq

Target filter request for counting vendor records matching specific logical criteria.
This message encapsulates lifecycle status filters, timestamp ranges, workflow markers,
and entity references to determine the total size of a targeted dataset.

**Note:** This is the primary message layout used by backend calculation engines, reporting
services, and frontend pagination headers to evaluate total record matches dynamically
before or alongside retrieving paginated results.

**`Generated`**

from message Scailo.VendorsServiceCountReq

## Hierarchy

- `Message`\<[`VendorsServiceCountReq`](VendorsServiceCountReq.md)\>

  ↳ **`VendorsServiceCountReq`**

## Table of contents

### Constructors

- [constructor](VendorsServiceCountReq.md#constructor)

### Properties

- [approvedByUserId](VendorsServiceCountReq.md#approvedbyuserid)
- [approvedOnEnd](VendorsServiceCountReq.md#approvedonend)
- [approvedOnStart](VendorsServiceCountReq.md#approvedonstart)
- [approverRoleId](VendorsServiceCountReq.md#approverroleid)
- [code](VendorsServiceCountReq.md#code)
- [creationTimestampEnd](VendorsServiceCountReq.md#creationtimestampend)
- [creationTimestampStart](VendorsServiceCountReq.md#creationtimestampstart)
- [email](VendorsServiceCountReq.md#email)
- [entityUuid](VendorsServiceCountReq.md#entityuuid)
- [familyId](VendorsServiceCountReq.md#familyid)
- [formData](VendorsServiceCountReq.md#formdata)
- [isActive](VendorsServiceCountReq.md#isactive)
- [modificationTimestampEnd](VendorsServiceCountReq.md#modificationtimestampend)
- [modificationTimestampStart](VendorsServiceCountReq.md#modificationtimestampstart)
- [name](VendorsServiceCountReq.md#name)
- [phone](VendorsServiceCountReq.md#phone)
- [status](VendorsServiceCountReq.md#status)
- [fields](VendorsServiceCountReq.md#fields)
- [runtime](VendorsServiceCountReq.md#runtime)
- [typeName](VendorsServiceCountReq.md#typename)

### Methods

- [clone](VendorsServiceCountReq.md#clone)
- [equals](VendorsServiceCountReq.md#equals)
- [fromBinary](VendorsServiceCountReq.md#frombinary)
- [fromJson](VendorsServiceCountReq.md#fromjson)
- [fromJsonString](VendorsServiceCountReq.md#fromjsonstring)
- [getType](VendorsServiceCountReq.md#gettype)
- [toBinary](VendorsServiceCountReq.md#tobinary)
- [toJSON](VendorsServiceCountReq.md#tojson)
- [toJson](VendorsServiceCountReq.md#tojson-1)
- [toJsonString](VendorsServiceCountReq.md#tojsonstring)
- [equals](VendorsServiceCountReq.md#equals-1)
- [fromBinary](VendorsServiceCountReq.md#frombinary-1)
- [fromJson](VendorsServiceCountReq.md#fromjson-1)
- [fromJsonString](VendorsServiceCountReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new VendorsServiceCountReq**(`data?`): [`VendorsServiceCountReq`](VendorsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`VendorsServiceCountReq`](VendorsServiceCountReq.md)\> |

#### Returns

[`VendorsServiceCountReq`](VendorsServiceCountReq.md)

#### Overrides

Message\&lt;VendorsServiceCountReq\&gt;.constructor

#### Defined in

[src/vendors.scailo_pb.ts:2618](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/vendors.scailo_pb.ts#L2618)

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

[src/vendors.scailo_pb.ts:2510](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/vendors.scailo_pb.ts#L2510)

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

[src/vendors.scailo_pb.ts:2494](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/vendors.scailo_pb.ts#L2494)

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

[src/vendors.scailo_pb.ts:2478](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/vendors.scailo_pb.ts#L2478)

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

[src/vendors.scailo_pb.ts:2526](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/vendors.scailo_pb.ts#L2526)

___

### code

• `Optional` **code**: `string`

**`Optional`**

**`Description`**

The unique code or alphanumeric token by which the vendor is classified or categorized internally.

**`Example`**

```ts
"VND-ACME-001"
```

**`Regex`**

.*

**`Format`**

Must be a non-empty string.

**`Generated`**

from field: optional string code = 21;

#### Defined in

[src/vendors.scailo_pb.ts:2558](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/vendors.scailo_pb.ts#L2558)

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

[src/vendors.scailo_pb.ts:2402](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/vendors.scailo_pb.ts#L2402)

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

[src/vendors.scailo_pb.ts:2386](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/vendors.scailo_pb.ts#L2386)

___

### email

• `Optional` **email**: `string`

**`Optional`**

**`Description`**

The primary communication email address of the vendor.

**`Example`**

```ts
"orders@acmelogistics.com"
```

**`Regex`**

^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$

**`Format`**

Must be a valid and structurally sound email address format.

**`Generated`**

from field: optional string email = 22;

#### Defined in

[src/vendors.scailo_pb.ts:2574](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/vendors.scailo_pb.ts#L2574)

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

[src/vendors.scailo_pb.ts:2450](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/vendors.scailo_pb.ts#L2450)

___

### familyId

• `Optional` **familyId**: `bigint`

**`Optional`**

**`Description`**

Filter by the unique internal identifier of a family. Setting this value restricts the results to only include vendors that are associated with this specific family.

**`Example`**

```ts
582
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: optional uint64 family_id = 40;

#### Defined in

[src/vendors.scailo_pb.ts:2606](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/vendors.scailo_pb.ts#L2606)

___

### formData

• **formData**: [`FormFieldDatumFilterRequest`](FormFieldDatumFilterRequest.md)[] = `[]`

**`Optional`**

**`Description`**

Count based on dynamic form field values.

**`Generated`**

from field: repeated Scailo.FormFieldDatumFilterRequest form_data = 500;

#### Defined in

[src/vendors.scailo_pb.ts:2616](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/vendors.scailo_pb.ts#L2616)

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

[src/vendors.scailo_pb.ts:2370](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/vendors.scailo_pb.ts#L2370)

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

[src/vendors.scailo_pb.ts:2434](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/vendors.scailo_pb.ts#L2434)

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

[src/vendors.scailo_pb.ts:2418](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/vendors.scailo_pb.ts#L2418)

___

### name

• `Optional` **name**: `string`

**`Optional`**

**`Description`**

The official or legal name of the vendor organization or individual.

**`Example`**

```ts
"Acme Logistics"
```

**`Regex`**

.*

**`Format`**

Must be a non-empty string.

**`Generated`**

from field: optional string name = 20;

#### Defined in

[src/vendors.scailo_pb.ts:2542](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/vendors.scailo_pb.ts#L2542)

___

### phone

• `Optional` **phone**: `string`

**`Optional`**

**`Description`**

The primary contact phone number of the vendor, typically including country and area codes.

**`Example`**

```ts
"+1-555-222-0199"
```

**`Regex`**

.*

**`Format`**

Must be a non-empty string representing a valid phone number format.

**`Generated`**

from field: optional string phone = 23;

#### Defined in

[src/vendors.scailo_pb.ts:2590](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/vendors.scailo_pb.ts#L2590)

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

[src/vendors.scailo_pb.ts:2462](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/vendors.scailo_pb.ts#L2462)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/vendors.scailo_pb.ts:2625](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/vendors.scailo_pb.ts#L2625)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/vendors.scailo_pb.ts:2623](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/vendors.scailo_pb.ts#L2623)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.VendorsServiceCountReq"``

#### Defined in

[src/vendors.scailo_pb.ts:2624](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/vendors.scailo_pb.ts#L2624)

## Methods

### clone

▸ **clone**(): [`VendorsServiceCountReq`](VendorsServiceCountReq.md)

Create a deep copy.

#### Returns

[`VendorsServiceCountReq`](VendorsServiceCountReq.md)

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
| `other` | `undefined` \| ``null`` \| [`VendorsServiceCountReq`](VendorsServiceCountReq.md) \| `PlainMessage`\<[`VendorsServiceCountReq`](VendorsServiceCountReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`VendorsServiceCountReq`](VendorsServiceCountReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`VendorsServiceCountReq`](VendorsServiceCountReq.md)\>

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
| `a` | `undefined` \| [`VendorsServiceCountReq`](VendorsServiceCountReq.md) \| `PlainMessage`\<[`VendorsServiceCountReq`](VendorsServiceCountReq.md)\> |
| `b` | `undefined` \| [`VendorsServiceCountReq`](VendorsServiceCountReq.md) \| `PlainMessage`\<[`VendorsServiceCountReq`](VendorsServiceCountReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/vendors.scailo_pb.ts:2657](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/vendors.scailo_pb.ts#L2657)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`VendorsServiceCountReq`](VendorsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`VendorsServiceCountReq`](VendorsServiceCountReq.md)

#### Defined in

[src/vendors.scailo_pb.ts:2645](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/vendors.scailo_pb.ts#L2645)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`VendorsServiceCountReq`](VendorsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VendorsServiceCountReq`](VendorsServiceCountReq.md)

#### Defined in

[src/vendors.scailo_pb.ts:2649](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/vendors.scailo_pb.ts#L2649)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`VendorsServiceCountReq`](VendorsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`VendorsServiceCountReq`](VendorsServiceCountReq.md)

#### Defined in

[src/vendors.scailo_pb.ts:2653](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/vendors.scailo_pb.ts#L2653)
