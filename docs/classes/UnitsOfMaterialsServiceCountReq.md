[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / UnitsOfMaterialsServiceCountReq

# Class: UnitsOfMaterialsServiceCountReq

Target filter request for counting unit of material records matching specific logical criteria.
This message encapsulates lifecycle status filters, timestamp ranges, workflow markers,
and entity references to determine the total size of a targeted dataset.

**Note:** This is the primary message layout used by backend calculation engines, reporting
services, and frontend pagination headers to evaluate total record matches dynamically
before or alongside retrieving paginated results.

**`Generated`**

from message Scailo.UnitsOfMaterialsServiceCountReq

## Hierarchy

- `Message`\<[`UnitsOfMaterialsServiceCountReq`](UnitsOfMaterialsServiceCountReq.md)\>

  ↳ **`UnitsOfMaterialsServiceCountReq`**

## Table of contents

### Constructors

- [constructor](UnitsOfMaterialsServiceCountReq.md#constructor)

### Properties

- [approvedByUserId](UnitsOfMaterialsServiceCountReq.md#approvedbyuserid)
- [approvedOnEnd](UnitsOfMaterialsServiceCountReq.md#approvedonend)
- [approvedOnStart](UnitsOfMaterialsServiceCountReq.md#approvedonstart)
- [approverRoleId](UnitsOfMaterialsServiceCountReq.md#approverroleid)
- [creationTimestampEnd](UnitsOfMaterialsServiceCountReq.md#creationtimestampend)
- [creationTimestampStart](UnitsOfMaterialsServiceCountReq.md#creationtimestampstart)
- [entityUuid](UnitsOfMaterialsServiceCountReq.md#entityuuid)
- [isActive](UnitsOfMaterialsServiceCountReq.md#isactive)
- [modificationTimestampEnd](UnitsOfMaterialsServiceCountReq.md#modificationtimestampend)
- [modificationTimestampStart](UnitsOfMaterialsServiceCountReq.md#modificationtimestampstart)
- [name](UnitsOfMaterialsServiceCountReq.md#name)
- [status](UnitsOfMaterialsServiceCountReq.md#status)
- [symbol](UnitsOfMaterialsServiceCountReq.md#symbol)
- [fields](UnitsOfMaterialsServiceCountReq.md#fields)
- [runtime](UnitsOfMaterialsServiceCountReq.md#runtime)
- [typeName](UnitsOfMaterialsServiceCountReq.md#typename)

### Methods

- [clone](UnitsOfMaterialsServiceCountReq.md#clone)
- [equals](UnitsOfMaterialsServiceCountReq.md#equals)
- [fromBinary](UnitsOfMaterialsServiceCountReq.md#frombinary)
- [fromJson](UnitsOfMaterialsServiceCountReq.md#fromjson)
- [fromJsonString](UnitsOfMaterialsServiceCountReq.md#fromjsonstring)
- [getType](UnitsOfMaterialsServiceCountReq.md#gettype)
- [toBinary](UnitsOfMaterialsServiceCountReq.md#tobinary)
- [toJSON](UnitsOfMaterialsServiceCountReq.md#tojson)
- [toJson](UnitsOfMaterialsServiceCountReq.md#tojson-1)
- [toJsonString](UnitsOfMaterialsServiceCountReq.md#tojsonstring)
- [equals](UnitsOfMaterialsServiceCountReq.md#equals-1)
- [fromBinary](UnitsOfMaterialsServiceCountReq.md#frombinary-1)
- [fromJson](UnitsOfMaterialsServiceCountReq.md#fromjson-1)
- [fromJsonString](UnitsOfMaterialsServiceCountReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new UnitsOfMaterialsServiceCountReq**(`data?`): [`UnitsOfMaterialsServiceCountReq`](UnitsOfMaterialsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`UnitsOfMaterialsServiceCountReq`](UnitsOfMaterialsServiceCountReq.md)\> |

#### Returns

[`UnitsOfMaterialsServiceCountReq`](UnitsOfMaterialsServiceCountReq.md)

#### Overrides

Message\&lt;UnitsOfMaterialsServiceCountReq\&gt;.constructor

#### Defined in

[src/units_of_materials.scailo_pb.ts:1220](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/units_of_materials.scailo_pb.ts#L1220)

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

[src/units_of_materials.scailo_pb.ts:1170](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/units_of_materials.scailo_pb.ts#L1170)

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

[src/units_of_materials.scailo_pb.ts:1154](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/units_of_materials.scailo_pb.ts#L1154)

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

[src/units_of_materials.scailo_pb.ts:1138](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/units_of_materials.scailo_pb.ts#L1138)

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

[src/units_of_materials.scailo_pb.ts:1186](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/units_of_materials.scailo_pb.ts#L1186)

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

[src/units_of_materials.scailo_pb.ts:1062](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/units_of_materials.scailo_pb.ts#L1062)

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

[src/units_of_materials.scailo_pb.ts:1046](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/units_of_materials.scailo_pb.ts#L1046)

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

[src/units_of_materials.scailo_pb.ts:1110](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/units_of_materials.scailo_pb.ts#L1110)

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

[src/units_of_materials.scailo_pb.ts:1030](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/units_of_materials.scailo_pb.ts#L1030)

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

[src/units_of_materials.scailo_pb.ts:1094](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/units_of_materials.scailo_pb.ts#L1094)

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

[src/units_of_materials.scailo_pb.ts:1078](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/units_of_materials.scailo_pb.ts#L1078)

___

### name

• `Optional` **name**: `string`

**`Optional`**

**`Description`**

The official or canonical name of the unit of material.

**`Example`**

```ts
"Kilogram"
```

**`Regex`**

.*

**`Format`**

Must be a non-empty string.

**`Generated`**

from field: optional string name = 20;

#### Defined in

[src/units_of_materials.scailo_pb.ts:1202](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/units_of_materials.scailo_pb.ts#L1202)

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

[src/units_of_materials.scailo_pb.ts:1122](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/units_of_materials.scailo_pb.ts#L1122)

___

### symbol

• `Optional` **symbol**: `string`

**`Optional`**

**`Description`**

The unique shorthand symbol, abbreviation, or metric token by which the unit of material is structurally classified.

**`Example`**

```ts
"kg"
```

**`Regex`**

.*

**`Format`**

Must be a non-empty string.

**`Generated`**

from field: optional string symbol = 21;

#### Defined in

[src/units_of_materials.scailo_pb.ts:1218](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/units_of_materials.scailo_pb.ts#L1218)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/units_of_materials.scailo_pb.ts:1227](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/units_of_materials.scailo_pb.ts#L1227)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/units_of_materials.scailo_pb.ts:1225](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/units_of_materials.scailo_pb.ts#L1225)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.UnitsOfMaterialsServiceCountReq"``

#### Defined in

[src/units_of_materials.scailo_pb.ts:1226](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/units_of_materials.scailo_pb.ts#L1226)

## Methods

### clone

▸ **clone**(): [`UnitsOfMaterialsServiceCountReq`](UnitsOfMaterialsServiceCountReq.md)

Create a deep copy.

#### Returns

[`UnitsOfMaterialsServiceCountReq`](UnitsOfMaterialsServiceCountReq.md)

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
| `other` | `undefined` \| ``null`` \| [`UnitsOfMaterialsServiceCountReq`](UnitsOfMaterialsServiceCountReq.md) \| `PlainMessage`\<[`UnitsOfMaterialsServiceCountReq`](UnitsOfMaterialsServiceCountReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`UnitsOfMaterialsServiceCountReq`](UnitsOfMaterialsServiceCountReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`UnitsOfMaterialsServiceCountReq`](UnitsOfMaterialsServiceCountReq.md)\>

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
| `a` | `undefined` \| [`UnitsOfMaterialsServiceCountReq`](UnitsOfMaterialsServiceCountReq.md) \| `PlainMessage`\<[`UnitsOfMaterialsServiceCountReq`](UnitsOfMaterialsServiceCountReq.md)\> |
| `b` | `undefined` \| [`UnitsOfMaterialsServiceCountReq`](UnitsOfMaterialsServiceCountReq.md) \| `PlainMessage`\<[`UnitsOfMaterialsServiceCountReq`](UnitsOfMaterialsServiceCountReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/units_of_materials.scailo_pb.ts:1255](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/units_of_materials.scailo_pb.ts#L1255)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`UnitsOfMaterialsServiceCountReq`](UnitsOfMaterialsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`UnitsOfMaterialsServiceCountReq`](UnitsOfMaterialsServiceCountReq.md)

#### Defined in

[src/units_of_materials.scailo_pb.ts:1243](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/units_of_materials.scailo_pb.ts#L1243)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`UnitsOfMaterialsServiceCountReq`](UnitsOfMaterialsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`UnitsOfMaterialsServiceCountReq`](UnitsOfMaterialsServiceCountReq.md)

#### Defined in

[src/units_of_materials.scailo_pb.ts:1247](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/units_of_materials.scailo_pb.ts#L1247)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`UnitsOfMaterialsServiceCountReq`](UnitsOfMaterialsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`UnitsOfMaterialsServiceCountReq`](UnitsOfMaterialsServiceCountReq.md)

#### Defined in

[src/units_of_materials.scailo_pb.ts:1251](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/units_of_materials.scailo_pb.ts#L1251)
