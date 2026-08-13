[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / AbsencesServiceCreateRequest

# Class: AbsencesServiceCreateRequest

Request message for recording a new employee absence.
This record tracks non-attendance periods such as sick leave, unauthorized absences,
or specific time-off types not covered by standard leave requests.

**Note:** This is the primary entry point for HR and Managers to log time away
from work for compliance and payroll processing.

**`Generated`**

from message Scailo.AbsencesServiceCreateRequest

## Hierarchy

- `Message`\<[`AbsencesServiceCreateRequest`](AbsencesServiceCreateRequest.md)\>

  ↳ **`AbsencesServiceCreateRequest`**

## Table of contents

### Constructors

- [constructor](AbsencesServiceCreateRequest.md#constructor)

### Properties

- [description](AbsencesServiceCreateRequest.md#description)
- [entityUuid](AbsencesServiceCreateRequest.md#entityuuid)
- [formData](AbsencesServiceCreateRequest.md#formdata)
- [fromTimestamp](AbsencesServiceCreateRequest.md#fromtimestamp)
- [leaveRequestId](AbsencesServiceCreateRequest.md#leaverequestid)
- [quantity](AbsencesServiceCreateRequest.md#quantity)
- [referenceId](AbsencesServiceCreateRequest.md#referenceid)
- [toTimestamp](AbsencesServiceCreateRequest.md#totimestamp)
- [uomId](AbsencesServiceCreateRequest.md#uomid)
- [userComment](AbsencesServiceCreateRequest.md#usercomment)
- [userId](AbsencesServiceCreateRequest.md#userid)
- [vaultFolderId](AbsencesServiceCreateRequest.md#vaultfolderid)
- [fields](AbsencesServiceCreateRequest.md#fields)
- [runtime](AbsencesServiceCreateRequest.md#runtime)
- [typeName](AbsencesServiceCreateRequest.md#typename)

### Methods

- [clone](AbsencesServiceCreateRequest.md#clone)
- [equals](AbsencesServiceCreateRequest.md#equals)
- [fromBinary](AbsencesServiceCreateRequest.md#frombinary)
- [fromJson](AbsencesServiceCreateRequest.md#fromjson)
- [fromJsonString](AbsencesServiceCreateRequest.md#fromjsonstring)
- [getType](AbsencesServiceCreateRequest.md#gettype)
- [toBinary](AbsencesServiceCreateRequest.md#tobinary)
- [toJSON](AbsencesServiceCreateRequest.md#tojson)
- [toJson](AbsencesServiceCreateRequest.md#tojson-1)
- [toJsonString](AbsencesServiceCreateRequest.md#tojsonstring)
- [equals](AbsencesServiceCreateRequest.md#equals-1)
- [fromBinary](AbsencesServiceCreateRequest.md#frombinary-1)
- [fromJson](AbsencesServiceCreateRequest.md#fromjson-1)
- [fromJsonString](AbsencesServiceCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new AbsencesServiceCreateRequest**(`data?`): [`AbsencesServiceCreateRequest`](AbsencesServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`AbsencesServiceCreateRequest`](AbsencesServiceCreateRequest.md)\> |

#### Returns

[`AbsencesServiceCreateRequest`](AbsencesServiceCreateRequest.md)

#### Overrides

Message\&lt;AbsencesServiceCreateRequest\&gt;.constructor

#### Defined in

[src/absences.scailo_pb.ts:328](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/absences.scailo_pb.ts#L328)

## Properties

### description

• `Optional` **description**: `string`

**`Optional`**

**`Description`**

Detailed description or notes regarding the nature of the absence.

**`Example`**

```ts
"Medical leave - Doctor's note pending"
```

**`Regex`**

[0-9A-Za-z ]*$

@format: Alphanumeric characters and spaces only. Can be left empty.

**`Generated`**

from field: optional string description = 17;

#### Defined in

[src/absences.scailo_pb.ts:312](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/absences.scailo_pb.ts#L312)

___

### entityUuid

• `Optional` **entityUuid**: `string`

**`Optional`**

**`Description`**

The globally unique identifier for the Organization or Business Entity.

**`Example`**

```ts
"550e8400-e29b-41d4-a716-446655440000"
```

**`Regex`**

^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$

**`Format`**

If provided, must be a valid v4 UUID in canonical hyphenated form.

**`Generated`**

from field: optional string entity_uuid = 1;

#### Defined in

[src/absences.scailo_pb.ts:152](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/absences.scailo_pb.ts#L152)

___

### formData

• **formData**: [`FormFieldDatumCreateRequest`](FormFieldDatumCreateRequest.md)[] = `[]`

**`Optional`**

**`Description`**

A collection of dynamic form fields for organization-specific data.

**`Example`**

```ts
[]
```

**`Format`**

An array/list of FormFieldDatumCreateRequest entries. Can be left empty if no custom attributes are needed.

**`Generated`**

from field: repeated Scailo.FormFieldDatumCreateRequest form_data = 30;

#### Defined in

[src/absences.scailo_pb.ts:326](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/absences.scailo_pb.ts#L326)

___

### fromTimestamp

• **fromTimestamp**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

Start of the absence period in UNIX Epoch Seconds.

**`Example`**

```ts
1698220800
```

**`Regex`**

^[1-9][0-9]*$

**`Format`**

Must be a strictly positive integer (1 or greater).

**`Generated`**

from field: uint64 from_timestamp = 13;

#### Defined in

[src/absences.scailo_pb.ts:248](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/absences.scailo_pb.ts#L248)

___

### leaveRequestId

• `Optional` **leaveRequestId**: `bigint`

**`Optional`**

**`Description`**

The ID of the Leave Request if this absence is linked to a formal approval. Set to 0 if not applicable.

**`Example`**

```ts
552
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: optional uint64 leave_request_id = 12;

#### Defined in

[src/absences.scailo_pb.ts:232](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/absences.scailo_pb.ts#L232)

___

### quantity

• **quantity**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

The total quantity of absence expressed in **cents** (multiplied by 100).

**`Example`**

```ts
1.5 days -> 150; 2.5 hours -> 250.
```

**`Regex`**

^[1-9][0-9]*$

**`Format`**

Must be a strictly positive integer (1 or greater).

**`Generated`**

from field: uint64 quantity = 16;

#### Defined in

[src/absences.scailo_pb.ts:296](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/absences.scailo_pb.ts#L296)

___

### referenceId

• **referenceId**: `string` = `""`

**`Mandatory`**

**`Description`**

A unique external reference ID for the record. Must be alphanumeric (spaces allowed). Used for cross-referencing with external systems.

**`Example`**

```ts
"ABS-2023-001"
```

**`Regex`**

"[0-9A-Za-z ]+$"

**`Format`**

Alphanumeric characters and spaces only. No special symbols or punctuation allowed.

**`Generated`**

from field: string reference_id = 10;

#### Defined in

[src/absences.scailo_pb.ts:200](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/absences.scailo_pb.ts#L200)

___

### toTimestamp

• **toTimestamp**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

End of the absence period in UNIX Epoch Seconds.

**`Example`**

```ts
1698307200
```

**`Regex`**

^[1-9][0-9]*$

**`Format`**

Must be a strictly positive integer (1 or greater).

**`Generated`**

from field: uint64 to_timestamp = 14;

#### Defined in

[src/absences.scailo_pb.ts:264](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/absences.scailo_pb.ts#L264)

___

### uomId

• **uomId**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

Unit of Measure ID for the absence quantity (e.g., Days, Hours).

**`Example`**

```ts
1
```

**`Regex`**

^[1-9][0-9]*$

**`Format`**

Must be a strictly positive integer (1 or greater).

**`Generated`**

from field: uint64 uom_id = 15;

#### Defined in

[src/absences.scailo_pb.ts:280](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/absences.scailo_pb.ts#L280)

___

### userComment

• `Optional` **userComment**: `string`

**`Optional`**

**`Description`**

Audit log comment or justification for creating this record. This is stored in the record's history for compliance purposes.

**`Example`**

```ts
"Employee called in with flu symptoms."
```

**`Regex`**

.*

**`Format`**

May contain any UTF-8 characters or be left empty.

**`Generated`**

from field: optional string user_comment = 2;

#### Defined in

[src/absences.scailo_pb.ts:168](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/absences.scailo_pb.ts#L168)

___

### userId

• **userId**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

The unique system identifier of the employee who is absent.

**`Example`**

```ts
1024
```

**`Regex`**

^[1-9][0-9]*$

**`Format`**

Must be a strictly positive integer (1 or greater).

**`Generated`**

from field: uint64 user_id = 11;

#### Defined in

[src/absences.scailo_pb.ts:216](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/absences.scailo_pb.ts#L216)

___

### vaultFolderId

• `Optional` **vaultFolderId**: `bigint`

**`Optional`**

**`Description`**

The ID of the associated vault folder for storing documents. Defaults to 0 if no specific folder is assigned.

**`Example`**

```ts
15234
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: optional uint64 vault_folder_id = 9;

#### Defined in

[src/absences.scailo_pb.ts:184](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/absences.scailo_pb.ts#L184)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/absences.scailo_pb.ts:335](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/absences.scailo_pb.ts#L335)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/absences.scailo_pb.ts:333](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/absences.scailo_pb.ts#L333)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.AbsencesServiceCreateRequest"``

#### Defined in

[src/absences.scailo_pb.ts:334](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/absences.scailo_pb.ts#L334)

## Methods

### clone

▸ **clone**(): [`AbsencesServiceCreateRequest`](AbsencesServiceCreateRequest.md)

Create a deep copy.

#### Returns

[`AbsencesServiceCreateRequest`](AbsencesServiceCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`AbsencesServiceCreateRequest`](AbsencesServiceCreateRequest.md) \| `PlainMessage`\<[`AbsencesServiceCreateRequest`](AbsencesServiceCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`AbsencesServiceCreateRequest`](AbsencesServiceCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`AbsencesServiceCreateRequest`](AbsencesServiceCreateRequest.md)\>

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
| `a` | `undefined` \| [`AbsencesServiceCreateRequest`](AbsencesServiceCreateRequest.md) \| `PlainMessage`\<[`AbsencesServiceCreateRequest`](AbsencesServiceCreateRequest.md)\> |
| `b` | `undefined` \| [`AbsencesServiceCreateRequest`](AbsencesServiceCreateRequest.md) \| `PlainMessage`\<[`AbsencesServiceCreateRequest`](AbsencesServiceCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/absences.scailo_pb.ts:362](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/absences.scailo_pb.ts#L362)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`AbsencesServiceCreateRequest`](AbsencesServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`AbsencesServiceCreateRequest`](AbsencesServiceCreateRequest.md)

#### Defined in

[src/absences.scailo_pb.ts:350](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/absences.scailo_pb.ts#L350)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`AbsencesServiceCreateRequest`](AbsencesServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`AbsencesServiceCreateRequest`](AbsencesServiceCreateRequest.md)

#### Defined in

[src/absences.scailo_pb.ts:354](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/absences.scailo_pb.ts#L354)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`AbsencesServiceCreateRequest`](AbsencesServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`AbsencesServiceCreateRequest`](AbsencesServiceCreateRequest.md)

#### Defined in

[src/absences.scailo_pb.ts:358](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/absences.scailo_pb.ts#L358)
