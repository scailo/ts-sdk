[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / ActivityAction

# Class: ActivityAction

Describes the parameters that constitute an action associated to an activity

**`Generated`**

from message Scailo.ActivityAction

## Hierarchy

- `Message`\<[`ActivityAction`](ActivityAction.md)\>

  ↳ **`ActivityAction`**

## Table of contents

### Constructors

- [constructor](ActivityAction.md#constructor)

### Properties

- [actionCodeId](ActivityAction.md#actioncodeid)
- [activityId](ActivityAction.md#activityid)
- [content](ActivityAction.md#content)
- [employeeId](ActivityAction.md#employeeid)
- [entityUuid](ActivityAction.md#entityuuid)
- [metadata](ActivityAction.md#metadata)
- [points](ActivityAction.md#points)
- [title](ActivityAction.md#title)
- [userComment](ActivityAction.md#usercomment)
- [fields](ActivityAction.md#fields)
- [runtime](ActivityAction.md#runtime)
- [typeName](ActivityAction.md#typename)

### Methods

- [clone](ActivityAction.md#clone)
- [equals](ActivityAction.md#equals)
- [fromBinary](ActivityAction.md#frombinary)
- [fromJson](ActivityAction.md#fromjson)
- [fromJsonString](ActivityAction.md#fromjsonstring)
- [getType](ActivityAction.md#gettype)
- [toBinary](ActivityAction.md#tobinary)
- [toJSON](ActivityAction.md#tojson)
- [toJson](ActivityAction.md#tojson-1)
- [toJsonString](ActivityAction.md#tojsonstring)
- [equals](ActivityAction.md#equals-1)
- [fromBinary](ActivityAction.md#frombinary-1)
- [fromJson](ActivityAction.md#fromjson-1)
- [fromJsonString](ActivityAction.md#fromjsonstring-1)

## Constructors

### constructor

• **new ActivityAction**(`data?`): [`ActivityAction`](ActivityAction.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ActivityAction`](ActivityAction.md)\> |

#### Returns

[`ActivityAction`](ActivityAction.md)

#### Overrides

Message\&lt;ActivityAction\&gt;.constructor

#### Defined in

src/activities.scailo_pb.ts:1887

## Properties

### actionCodeId

• **actionCodeId**: `bigint` = `protoInt64.zero`

Stores the action code ID

**`Generated`**

from field: uint64 action_code_id = 13;

#### Defined in

src/activities.scailo_pb.ts:1878

___

### activityId

• **activityId**: `bigint` = `protoInt64.zero`

Stores the activity ID

**`Generated`**

from field: uint64 activity_id = 10;

#### Defined in

src/activities.scailo_pb.ts:1857

___

### content

• **content**: `string` = `""`

The content of the action

**`Generated`**

from field: string content = 12;

#### Defined in

src/activities.scailo_pb.ts:1871

___

### employeeId

• **employeeId**: `bigint` = `protoInt64.zero`

Stores the optional employee ID

**`Generated`**

from field: uint64 employee_id = 9;

#### Defined in

src/activities.scailo_pb.ts:1850

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

src/activities.scailo_pb.ts:1829

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

Stores the metadata of this activity

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

src/activities.scailo_pb.ts:1836

___

### points

• **points**: `bigint` = `protoInt64.zero`

Stores the number of points assigned to this action

**`Generated`**

from field: uint64 points = 14;

#### Defined in

src/activities.scailo_pb.ts:1885

___

### title

• **title**: `string` = `""`

The title of the action

**`Generated`**

from field: string title = 11;

#### Defined in

src/activities.scailo_pb.ts:1864

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might have added during an operation

**`Generated`**

from field: string user_comment = 5;

#### Defined in

src/activities.scailo_pb.ts:1843

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/activities.scailo_pb.ts:1894

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/activities.scailo_pb.ts:1892

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ActivityAction"``

#### Defined in

src/activities.scailo_pb.ts:1893

## Methods

### clone

▸ **clone**(): [`ActivityAction`](ActivityAction.md)

Create a deep copy.

#### Returns

[`ActivityAction`](ActivityAction.md)

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
| `other` | `undefined` \| ``null`` \| [`ActivityAction`](ActivityAction.md) \| `PlainMessage`\<[`ActivityAction`](ActivityAction.md)\> |

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

▸ **getType**(): `MessageType`\<[`ActivityAction`](ActivityAction.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ActivityAction`](ActivityAction.md)\>

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
| `a` | `undefined` \| [`ActivityAction`](ActivityAction.md) \| `PlainMessage`\<[`ActivityAction`](ActivityAction.md)\> |
| `b` | `undefined` \| [`ActivityAction`](ActivityAction.md) \| `PlainMessage`\<[`ActivityAction`](ActivityAction.md)\> |

#### Returns

`boolean`

#### Defined in

src/activities.scailo_pb.ts:1918

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ActivityAction`](ActivityAction.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ActivityAction`](ActivityAction.md)

#### Defined in

src/activities.scailo_pb.ts:1906

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ActivityAction`](ActivityAction.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ActivityAction`](ActivityAction.md)

#### Defined in

src/activities.scailo_pb.ts:1910

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ActivityAction`](ActivityAction.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ActivityAction`](ActivityAction.md)

#### Defined in

src/activities.scailo_pb.ts:1914
