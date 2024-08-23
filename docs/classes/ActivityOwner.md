[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / ActivityOwner

# Class: ActivityOwner

Describes the parameters that constitute an activity owner

**`Generated`**

from message Scailo.ActivityOwner

## Hierarchy

- `Message`\<[`ActivityOwner`](ActivityOwner.md)\>

  ↳ **`ActivityOwner`**

## Table of contents

### Constructors

- [constructor](ActivityOwner.md#constructor)

### Properties

- [activityId](ActivityOwner.md#activityid)
- [employeeId](ActivityOwner.md#employeeid)
- [entityUuid](ActivityOwner.md#entityuuid)
- [metadata](ActivityOwner.md#metadata)
- [userComment](ActivityOwner.md#usercomment)
- [fields](ActivityOwner.md#fields)
- [runtime](ActivityOwner.md#runtime)
- [typeName](ActivityOwner.md#typename)

### Methods

- [clone](ActivityOwner.md#clone)
- [equals](ActivityOwner.md#equals)
- [fromBinary](ActivityOwner.md#frombinary)
- [fromJson](ActivityOwner.md#fromjson)
- [fromJsonString](ActivityOwner.md#fromjsonstring)
- [getType](ActivityOwner.md#gettype)
- [toBinary](ActivityOwner.md#tobinary)
- [toJSON](ActivityOwner.md#tojson)
- [toJson](ActivityOwner.md#tojson-1)
- [toJsonString](ActivityOwner.md#tojsonstring)
- [equals](ActivityOwner.md#equals-1)
- [fromBinary](ActivityOwner.md#frombinary-1)
- [fromJson](ActivityOwner.md#fromjson-1)
- [fromJsonString](ActivityOwner.md#fromjsonstring-1)

## Constructors

### constructor

• **new ActivityOwner**(`data?`): [`ActivityOwner`](ActivityOwner.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ActivityOwner`](ActivityOwner.md)\> |

#### Returns

[`ActivityOwner`](ActivityOwner.md)

#### Overrides

Message\&lt;ActivityOwner\&gt;.constructor

#### Defined in

src/activities.scailo_pb.ts:2641

## Properties

### activityId

• **activityId**: `bigint` = `protoInt64.zero`

Stores the activity ID

**`Generated`**

from field: uint64 activity_id = 10;

#### Defined in

src/activities.scailo_pb.ts:2632

___

### employeeId

• **employeeId**: `bigint` = `protoInt64.zero`

Stores the employee ID

**`Generated`**

from field: uint64 employee_id = 11;

#### Defined in

src/activities.scailo_pb.ts:2639

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

src/activities.scailo_pb.ts:2611

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

Stores the metadata of this activity

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

src/activities.scailo_pb.ts:2618

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might have added during an operation

**`Generated`**

from field: string user_comment = 5;

#### Defined in

src/activities.scailo_pb.ts:2625

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/activities.scailo_pb.ts:2648

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/activities.scailo_pb.ts:2646

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ActivityOwner"``

#### Defined in

src/activities.scailo_pb.ts:2647

## Methods

### clone

▸ **clone**(): [`ActivityOwner`](ActivityOwner.md)

Create a deep copy.

#### Returns

[`ActivityOwner`](ActivityOwner.md)

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
| `other` | `undefined` \| ``null`` \| [`ActivityOwner`](ActivityOwner.md) \| `PlainMessage`\<[`ActivityOwner`](ActivityOwner.md)\> |

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

▸ **getType**(): `MessageType`\<[`ActivityOwner`](ActivityOwner.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ActivityOwner`](ActivityOwner.md)\>

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
| `a` | `undefined` \| [`ActivityOwner`](ActivityOwner.md) \| `PlainMessage`\<[`ActivityOwner`](ActivityOwner.md)\> |
| `b` | `undefined` \| [`ActivityOwner`](ActivityOwner.md) \| `PlainMessage`\<[`ActivityOwner`](ActivityOwner.md)\> |

#### Returns

`boolean`

#### Defined in

src/activities.scailo_pb.ts:2668

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ActivityOwner`](ActivityOwner.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ActivityOwner`](ActivityOwner.md)

#### Defined in

src/activities.scailo_pb.ts:2656

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ActivityOwner`](ActivityOwner.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ActivityOwner`](ActivityOwner.md)

#### Defined in

src/activities.scailo_pb.ts:2660

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ActivityOwner`](ActivityOwner.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ActivityOwner`](ActivityOwner.md)

#### Defined in

src/activities.scailo_pb.ts:2664
