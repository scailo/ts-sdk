[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / VendorsServiceCountReq

# Class: VendorsServiceCountReq

Describes the base request payload of a count search

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

[src/vendors.scailo_pb.ts:2033](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/vendors.scailo_pb.ts#L2033)

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

[src/vendors.scailo_pb.ts:1973](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/vendors.scailo_pb.ts#L1973)

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

[src/vendors.scailo_pb.ts:1957](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/vendors.scailo_pb.ts#L1957)

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

[src/vendors.scailo_pb.ts:1941](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/vendors.scailo_pb.ts#L1941)

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

[src/vendors.scailo_pb.ts:1989](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/vendors.scailo_pb.ts#L1989)

___

### code

• **code**: `string` = `""`

The unique code by which the vendor is classified

**`Generated`**

from field: string code = 21;

#### Defined in

[src/vendors.scailo_pb.ts:2003](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/vendors.scailo_pb.ts#L2003)

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

[src/vendors.scailo_pb.ts:1865](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/vendors.scailo_pb.ts#L1865)

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

[src/vendors.scailo_pb.ts:1849](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/vendors.scailo_pb.ts#L1849)

___

### email

• **email**: `string` = `""`

The primary email of the vendor

**`Generated`**

from field: string email = 22;

#### Defined in

[src/vendors.scailo_pb.ts:2010](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/vendors.scailo_pb.ts#L2010)

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

[src/vendors.scailo_pb.ts:1913](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/vendors.scailo_pb.ts#L1913)

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

The ID of the family

**`Generated`**

from field: uint64 family_id = 40;

#### Defined in

[src/vendors.scailo_pb.ts:2024](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/vendors.scailo_pb.ts#L2024)

___

### formData

• **formData**: [`FormFieldDatumFilterRequest`](FormFieldDatumFilterRequest.md)[] = `[]`

The list of form data filters

**`Generated`**

from field: repeated Scailo.FormFieldDatumFilterRequest form_data = 500;

#### Defined in

[src/vendors.scailo_pb.ts:2031](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/vendors.scailo_pb.ts#L2031)

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

[src/vendors.scailo_pb.ts:1833](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/vendors.scailo_pb.ts#L1833)

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

[src/vendors.scailo_pb.ts:1897](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/vendors.scailo_pb.ts#L1897)

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

[src/vendors.scailo_pb.ts:1881](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/vendors.scailo_pb.ts#L1881)

___

### name

• **name**: `string` = `""`

The name of the vendor

**`Generated`**

from field: string name = 20;

#### Defined in

[src/vendors.scailo_pb.ts:1996](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/vendors.scailo_pb.ts#L1996)

___

### phone

• **phone**: `string` = `""`

The primary contact number of the vendor

**`Generated`**

from field: string phone = 23;

#### Defined in

[src/vendors.scailo_pb.ts:2017](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/vendors.scailo_pb.ts#L2017)

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

[src/vendors.scailo_pb.ts:1925](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/vendors.scailo_pb.ts#L1925)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/vendors.scailo_pb.ts:2040](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/vendors.scailo_pb.ts#L2040)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/vendors.scailo_pb.ts:2038](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/vendors.scailo_pb.ts#L2038)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.VendorsServiceCountReq"``

#### Defined in

[src/vendors.scailo_pb.ts:2039](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/vendors.scailo_pb.ts#L2039)

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

[src/vendors.scailo_pb.ts:2072](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/vendors.scailo_pb.ts#L2072)

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

[src/vendors.scailo_pb.ts:2060](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/vendors.scailo_pb.ts#L2060)

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

[src/vendors.scailo_pb.ts:2064](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/vendors.scailo_pb.ts#L2064)

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

[src/vendors.scailo_pb.ts:2068](https://github.com/scailo/ts-sdk/blob/1f18e5ef034d2e7939eefb8fcb2486a3d878e8ff/src/vendors.scailo_pb.ts#L2068)
