[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / WorkOrdersServiceAutofillRequest

# Class: WorkOrdersServiceAutofillRequest

Describes the parameters necessary to perform an autofill request

**`Generated`**

from message Scailo.WorkOrdersServiceAutofillRequest

## Hierarchy

- `Message`\<[`WorkOrdersServiceAutofillRequest`](WorkOrdersServiceAutofillRequest.md)\>

  ↳ **`WorkOrdersServiceAutofillRequest`**

## Table of contents

### Constructors

- [constructor](WorkOrdersServiceAutofillRequest.md#constructor)

### Properties

- [populateUsingEquationDependencies](WorkOrdersServiceAutofillRequest.md#populateusingequationdependencies)
- [userComment](WorkOrdersServiceAutofillRequest.md#usercomment)
- [uuid](WorkOrdersServiceAutofillRequest.md#uuid)
- [fields](WorkOrdersServiceAutofillRequest.md#fields)
- [runtime](WorkOrdersServiceAutofillRequest.md#runtime)
- [typeName](WorkOrdersServiceAutofillRequest.md#typename)

### Methods

- [clone](WorkOrdersServiceAutofillRequest.md#clone)
- [equals](WorkOrdersServiceAutofillRequest.md#equals)
- [fromBinary](WorkOrdersServiceAutofillRequest.md#frombinary)
- [fromJson](WorkOrdersServiceAutofillRequest.md#fromjson)
- [fromJsonString](WorkOrdersServiceAutofillRequest.md#fromjsonstring)
- [getType](WorkOrdersServiceAutofillRequest.md#gettype)
- [toBinary](WorkOrdersServiceAutofillRequest.md#tobinary)
- [toJSON](WorkOrdersServiceAutofillRequest.md#tojson)
- [toJson](WorkOrdersServiceAutofillRequest.md#tojson-1)
- [toJsonString](WorkOrdersServiceAutofillRequest.md#tojsonstring)
- [equals](WorkOrdersServiceAutofillRequest.md#equals-1)
- [fromBinary](WorkOrdersServiceAutofillRequest.md#frombinary-1)
- [fromJson](WorkOrdersServiceAutofillRequest.md#fromjson-1)
- [fromJsonString](WorkOrdersServiceAutofillRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new WorkOrdersServiceAutofillRequest**(`data?`): [`WorkOrdersServiceAutofillRequest`](WorkOrdersServiceAutofillRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`WorkOrdersServiceAutofillRequest`](WorkOrdersServiceAutofillRequest.md)\> |

#### Returns

[`WorkOrdersServiceAutofillRequest`](WorkOrdersServiceAutofillRequest.md)

#### Overrides

Message\&lt;WorkOrdersServiceAutofillRequest\&gt;.constructor

#### Defined in

src/work_orders.scailo_pb.ts:455

## Properties

### populateUsingEquationDependencies

• **populateUsingEquationDependencies**: `boolean` = `false`

Denotes if all the equation dependencies (if applicable) should also be automatically added to the work order

**`Generated`**

from field: bool populate_using_equation_dependencies = 3;

#### Defined in

src/work_orders.scailo_pb.ts:453

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

src/work_orders.scailo_pb.ts:439

___

### uuid

• **uuid**: `string` = `""`

The UUID of the record that needs to be updated

**`Generated`**

from field: string uuid = 2;

#### Defined in

src/work_orders.scailo_pb.ts:446

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/work_orders.scailo_pb.ts:462

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/work_orders.scailo_pb.ts:460

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.WorkOrdersServiceAutofillRequest"``

#### Defined in

src/work_orders.scailo_pb.ts:461

## Methods

### clone

▸ **clone**(): [`WorkOrdersServiceAutofillRequest`](WorkOrdersServiceAutofillRequest.md)

Create a deep copy.

#### Returns

[`WorkOrdersServiceAutofillRequest`](WorkOrdersServiceAutofillRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`WorkOrdersServiceAutofillRequest`](WorkOrdersServiceAutofillRequest.md) \| `PlainMessage`\<[`WorkOrdersServiceAutofillRequest`](WorkOrdersServiceAutofillRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`WorkOrdersServiceAutofillRequest`](WorkOrdersServiceAutofillRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`WorkOrdersServiceAutofillRequest`](WorkOrdersServiceAutofillRequest.md)\>

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
| `a` | `undefined` \| [`WorkOrdersServiceAutofillRequest`](WorkOrdersServiceAutofillRequest.md) \| `PlainMessage`\<[`WorkOrdersServiceAutofillRequest`](WorkOrdersServiceAutofillRequest.md)\> |
| `b` | `undefined` \| [`WorkOrdersServiceAutofillRequest`](WorkOrdersServiceAutofillRequest.md) \| `PlainMessage`\<[`WorkOrdersServiceAutofillRequest`](WorkOrdersServiceAutofillRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/work_orders.scailo_pb.ts:480

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`WorkOrdersServiceAutofillRequest`](WorkOrdersServiceAutofillRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`WorkOrdersServiceAutofillRequest`](WorkOrdersServiceAutofillRequest.md)

#### Defined in

src/work_orders.scailo_pb.ts:468

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`WorkOrdersServiceAutofillRequest`](WorkOrdersServiceAutofillRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`WorkOrdersServiceAutofillRequest`](WorkOrdersServiceAutofillRequest.md)

#### Defined in

src/work_orders.scailo_pb.ts:472

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`WorkOrdersServiceAutofillRequest`](WorkOrdersServiceAutofillRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`WorkOrdersServiceAutofillRequest`](WorkOrdersServiceAutofillRequest.md)

#### Defined in

src/work_orders.scailo_pb.ts:476
