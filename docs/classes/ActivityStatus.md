[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / ActivityStatus

# Class: ActivityStatus

Describes the parameters that are part of a standard response

**`Generated`**

from message Scailo.ActivityStatus

## Hierarchy

- `Message`\<[`ActivityStatus`](ActivityStatus.md)\>

  ↳ **`ActivityStatus`**

## Table of contents

### Constructors

- [constructor](ActivityStatus.md#constructor)

### Properties

- [approvalMetadata](ActivityStatus.md#approvalmetadata)
- [bgColor](ActivityStatus.md#bgcolor)
- [code](ActivityStatus.md#code)
- [description](ActivityStatus.md#description)
- [entityUuid](ActivityStatus.md#entityuuid)
- [fgColor](ActivityStatus.md#fgcolor)
- [logs](ActivityStatus.md#logs)
- [metadata](ActivityStatus.md#metadata)
- [name](ActivityStatus.md#name)
- [status](ActivityStatus.md#status)
- [fields](ActivityStatus.md#fields)
- [runtime](ActivityStatus.md#runtime)
- [typeName](ActivityStatus.md#typename)

### Methods

- [clone](ActivityStatus.md#clone)
- [equals](ActivityStatus.md#equals)
- [fromBinary](ActivityStatus.md#frombinary)
- [fromJson](ActivityStatus.md#fromjson)
- [fromJsonString](ActivityStatus.md#fromjsonstring)
- [getType](ActivityStatus.md#gettype)
- [toBinary](ActivityStatus.md#tobinary)
- [toJSON](ActivityStatus.md#tojson)
- [toJson](ActivityStatus.md#tojson-1)
- [toJsonString](ActivityStatus.md#tojsonstring)
- [equals](ActivityStatus.md#equals-1)
- [fromBinary](ActivityStatus.md#frombinary-1)
- [fromJson](ActivityStatus.md#fromjson-1)
- [fromJsonString](ActivityStatus.md#fromjsonstring-1)

## Constructors

### constructor

• **new ActivityStatus**(`data?`): [`ActivityStatus`](ActivityStatus.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ActivityStatus`](ActivityStatus.md)\> |

#### Returns

[`ActivityStatus`](ActivityStatus.md)

#### Overrides

Message\&lt;ActivityStatus\&gt;.constructor

#### Defined in

src/activities_statuses.scailo_pb.ts:342

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

ActivitiesStatuses the approval metadata

**`Generated`**

from field: Scailo.ApprovalMetadata approval_metadata = 3;

#### Defined in

src/activities_statuses.scailo_pb.ts:291

___

### bgColor

• **bgColor**: `string` = `""`

The background color that is displayed for easy recognition

**`Generated`**

from field: string bg_color = 13;

#### Defined in

src/activities_statuses.scailo_pb.ts:333

___

### code

• **code**: `string` = `""`

The unique code by which the activity status is classified

**`Generated`**

from field: string code = 11;

#### Defined in

src/activities_statuses.scailo_pb.ts:319

___

### description

• **description**: `string` = `""`

The description of the activity status

**`Generated`**

from field: string description = 14;

#### Defined in

src/activities_statuses.scailo_pb.ts:340

___

### entityUuid

• **entityUuid**: `string` = `""`

ActivitiesStatuses a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

src/activities_statuses.scailo_pb.ts:277

___

### fgColor

• **fgColor**: `string` = `""`

The color of the text that is displayed for easy recognition

**`Generated`**

from field: string fg_color = 12;

#### Defined in

src/activities_statuses.scailo_pb.ts:326

___

### logs

• **logs**: [`LogbookLogConciseSLC`](LogbookLogConciseSLC.md)[] = `[]`

ActivitiesStatuses the logs of every operation performed on this activity status

**`Generated`**

from field: repeated Scailo.LogbookLogConciseSLC logs = 5;

#### Defined in

src/activities_statuses.scailo_pb.ts:305

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

ActivitiesStatuses the metadata of this activity status

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

src/activities_statuses.scailo_pb.ts:284

___

### name

• **name**: `string` = `""`

The name of the activity status

**`Generated`**

from field: string name = 10;

#### Defined in

src/activities_statuses.scailo_pb.ts:312

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

The status of this activity status

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 4;

#### Defined in

src/activities_statuses.scailo_pb.ts:298

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/activities_statuses.scailo_pb.ts:349

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/activities_statuses.scailo_pb.ts:347

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ActivityStatus"``

#### Defined in

src/activities_statuses.scailo_pb.ts:348

## Methods

### clone

▸ **clone**(): [`ActivityStatus`](ActivityStatus.md)

Create a deep copy.

#### Returns

[`ActivityStatus`](ActivityStatus.md)

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
| `other` | `undefined` \| ``null`` \| [`ActivityStatus`](ActivityStatus.md) \| `PlainMessage`\<[`ActivityStatus`](ActivityStatus.md)\> |

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

▸ **getType**(): `MessageType`\<[`ActivityStatus`](ActivityStatus.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ActivityStatus`](ActivityStatus.md)\>

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
| `a` | `undefined` \| [`ActivityStatus`](ActivityStatus.md) \| `PlainMessage`\<[`ActivityStatus`](ActivityStatus.md)\> |
| `b` | `undefined` \| [`ActivityStatus`](ActivityStatus.md) \| `PlainMessage`\<[`ActivityStatus`](ActivityStatus.md)\> |

#### Returns

`boolean`

#### Defined in

src/activities_statuses.scailo_pb.ts:374

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ActivityStatus`](ActivityStatus.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ActivityStatus`](ActivityStatus.md)

#### Defined in

src/activities_statuses.scailo_pb.ts:362

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ActivityStatus`](ActivityStatus.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ActivityStatus`](ActivityStatus.md)

#### Defined in

src/activities_statuses.scailo_pb.ts:366

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ActivityStatus`](ActivityStatus.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ActivityStatus`](ActivityStatus.md)

#### Defined in

src/activities_statuses.scailo_pb.ts:370
