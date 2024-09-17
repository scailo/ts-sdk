[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / Location

# Class: Location

Describes the parameters that are part of a standard response

**`Generated`**

from message Scailo.Location

## Hierarchy

- `Message`\<[`Location`](Location.md)\>

  ↳ **`Location`**

## Table of contents

### Constructors

- [constructor](Location.md#constructor)

### Properties

- [approvalMetadata](Location.md#approvalmetadata)
- [code](Location.md#code)
- [email](Location.md#email)
- [entityUuid](Location.md#entityuuid)
- [formData](Location.md#formdata)
- [logs](Location.md#logs)
- [metadata](Location.md#metadata)
- [name](Location.md#name)
- [phone](Location.md#phone)
- [status](Location.md#status)
- [fields](Location.md#fields)
- [runtime](Location.md#runtime)
- [typeName](Location.md#typename)

### Methods

- [clone](Location.md#clone)
- [equals](Location.md#equals)
- [fromBinary](Location.md#frombinary)
- [fromJson](Location.md#fromjson)
- [fromJsonString](Location.md#fromjsonstring)
- [getType](Location.md#gettype)
- [toBinary](Location.md#tobinary)
- [toJSON](Location.md#tojson)
- [toJson](Location.md#tojson-1)
- [toJsonString](Location.md#tojsonstring)
- [equals](Location.md#equals-1)
- [fromBinary](Location.md#frombinary-1)
- [fromJson](Location.md#fromjson-1)
- [fromJsonString](Location.md#fromjsonstring-1)

## Constructors

### constructor

• **new Location**(`data?`): [`Location`](Location.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`Location`](Location.md)\> |

#### Returns

[`Location`](Location.md)

#### Overrides

Message\&lt;Location\&gt;.constructor

#### Defined in

src/locations.scailo_pb.ts:367

## Properties

### approvalMetadata

• `Optional` **approvalMetadata**: [`ApprovalMetadata`](ApprovalMetadata.md)

Stores the approval metadata

**`Generated`**

from field: Scailo.ApprovalMetadata approval_metadata = 3;

#### Defined in

src/locations.scailo_pb.ts:316

___

### code

• **code**: `string` = `""`

The unique code by which the location is classified

**`Generated`**

from field: string code = 11;

#### Defined in

src/locations.scailo_pb.ts:344

___

### email

• **email**: `string` = `""`

The primary email of the location

**`Generated`**

from field: string email = 12;

#### Defined in

src/locations.scailo_pb.ts:351

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

src/locations.scailo_pb.ts:302

___

### formData

• **formData**: [`FormFieldDatum`](FormFieldDatum.md)[] = `[]`

The list of dynamic forms

**`Generated`**

from field: repeated Scailo.FormFieldDatum form_data = 30;

#### Defined in

src/locations.scailo_pb.ts:365

___

### logs

• **logs**: [`LogbookLogConciseSLC`](LogbookLogConciseSLC.md)[] = `[]`

Stores the logs of every operation performed on this location

**`Generated`**

from field: repeated Scailo.LogbookLogConciseSLC logs = 5;

#### Defined in

src/locations.scailo_pb.ts:330

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

Stores the metadata of this location

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

src/locations.scailo_pb.ts:309

___

### name

• **name**: `string` = `""`

The name of the location

**`Generated`**

from field: string name = 10;

#### Defined in

src/locations.scailo_pb.ts:337

___

### phone

• **phone**: `string` = `""`

The primary contact number of the location

**`Generated`**

from field: string phone = 13;

#### Defined in

src/locations.scailo_pb.ts:358

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

The status of this location

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 4;

#### Defined in

src/locations.scailo_pb.ts:323

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/locations.scailo_pb.ts:374

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/locations.scailo_pb.ts:372

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.Location"``

#### Defined in

src/locations.scailo_pb.ts:373

## Methods

### clone

▸ **clone**(): [`Location`](Location.md)

Create a deep copy.

#### Returns

[`Location`](Location.md)

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
| `other` | `undefined` \| ``null`` \| [`Location`](Location.md) \| `PlainMessage`\<[`Location`](Location.md)\> |

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

▸ **getType**(): `MessageType`\<[`Location`](Location.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`Location`](Location.md)\>

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
| `a` | `undefined` \| [`Location`](Location.md) \| `PlainMessage`\<[`Location`](Location.md)\> |
| `b` | `undefined` \| [`Location`](Location.md) \| `PlainMessage`\<[`Location`](Location.md)\> |

#### Returns

`boolean`

#### Defined in

src/locations.scailo_pb.ts:399

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`Location`](Location.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`Location`](Location.md)

#### Defined in

src/locations.scailo_pb.ts:387

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`Location`](Location.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`Location`](Location.md)

#### Defined in

src/locations.scailo_pb.ts:391

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`Location`](Location.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`Location`](Location.md)

#### Defined in

src/locations.scailo_pb.ts:395
