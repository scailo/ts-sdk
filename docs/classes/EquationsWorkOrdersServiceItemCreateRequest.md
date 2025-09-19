[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / EquationsWorkOrdersServiceItemCreateRequest

# Class: EquationsWorkOrdersServiceItemCreateRequest

Describes the parameters required to add an item to a equation work order

**`Generated`**

from message Scailo.EquationsWorkOrdersServiceItemCreateRequest

## Hierarchy

- `Message`\<[`EquationsWorkOrdersServiceItemCreateRequest`](EquationsWorkOrdersServiceItemCreateRequest.md)\>

  ↳ **`EquationsWorkOrdersServiceItemCreateRequest`**

## Table of contents

### Constructors

- [constructor](EquationsWorkOrdersServiceItemCreateRequest.md#constructor)

### Properties

- [equationId](EquationsWorkOrdersServiceItemCreateRequest.md#equationid)
- [familyId](EquationsWorkOrdersServiceItemCreateRequest.md#familyid)
- [quantity](EquationsWorkOrdersServiceItemCreateRequest.md#quantity)
- [specifications](EquationsWorkOrdersServiceItemCreateRequest.md#specifications)
- [unitPrice](EquationsWorkOrdersServiceItemCreateRequest.md#unitprice)
- [userComment](EquationsWorkOrdersServiceItemCreateRequest.md#usercomment)
- [fields](EquationsWorkOrdersServiceItemCreateRequest.md#fields)
- [runtime](EquationsWorkOrdersServiceItemCreateRequest.md#runtime)
- [typeName](EquationsWorkOrdersServiceItemCreateRequest.md#typename)

### Methods

- [clone](EquationsWorkOrdersServiceItemCreateRequest.md#clone)
- [equals](EquationsWorkOrdersServiceItemCreateRequest.md#equals)
- [fromBinary](EquationsWorkOrdersServiceItemCreateRequest.md#frombinary)
- [fromJson](EquationsWorkOrdersServiceItemCreateRequest.md#fromjson)
- [fromJsonString](EquationsWorkOrdersServiceItemCreateRequest.md#fromjsonstring)
- [getType](EquationsWorkOrdersServiceItemCreateRequest.md#gettype)
- [toBinary](EquationsWorkOrdersServiceItemCreateRequest.md#tobinary)
- [toJSON](EquationsWorkOrdersServiceItemCreateRequest.md#tojson)
- [toJson](EquationsWorkOrdersServiceItemCreateRequest.md#tojson-1)
- [toJsonString](EquationsWorkOrdersServiceItemCreateRequest.md#tojsonstring)
- [equals](EquationsWorkOrdersServiceItemCreateRequest.md#equals-1)
- [fromBinary](EquationsWorkOrdersServiceItemCreateRequest.md#frombinary-1)
- [fromJson](EquationsWorkOrdersServiceItemCreateRequest.md#fromjson-1)
- [fromJsonString](EquationsWorkOrdersServiceItemCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new EquationsWorkOrdersServiceItemCreateRequest**(`data?`): [`EquationsWorkOrdersServiceItemCreateRequest`](EquationsWorkOrdersServiceItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`EquationsWorkOrdersServiceItemCreateRequest`](EquationsWorkOrdersServiceItemCreateRequest.md)\> |

#### Returns

[`EquationsWorkOrdersServiceItemCreateRequest`](EquationsWorkOrdersServiceItemCreateRequest.md)

#### Overrides

Message\&lt;EquationsWorkOrdersServiceItemCreateRequest\&gt;.constructor

#### Defined in

[src/equations_work_orders.scailo_pb.ts:570](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/equations_work_orders.scailo_pb.ts#L570)

## Properties

### equationId

• **equationId**: `bigint` = `protoInt64.zero`

Stores the ID of the equation work order

**`Generated`**

from field: uint64 equation_id = 10;

#### Defined in

[src/equations_work_orders.scailo_pb.ts:540](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/equations_work_orders.scailo_pb.ts#L540)

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

The ID of the family that the equation depends upon

**`Generated`**

from field: uint64 family_id = 11;

#### Defined in

[src/equations_work_orders.scailo_pb.ts:547](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/equations_work_orders.scailo_pb.ts#L547)

___

### quantity

• **quantity**: `bigint` = `protoInt64.zero`

The quantity of the associated family to be used as the multiplier

**`Generated`**

from field: uint64 quantity = 12;

#### Defined in

[src/equations_work_orders.scailo_pb.ts:554](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/equations_work_orders.scailo_pb.ts#L554)

___

### specifications

• **specifications**: `string` = `""`

The optional specifications

**`Generated`**

from field: string specifications = 14;

#### Defined in

[src/equations_work_orders.scailo_pb.ts:568](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/equations_work_orders.scailo_pb.ts#L568)

___

### unitPrice

• **unitPrice**: `bigint` = `protoInt64.zero`

The optional unit price of this family

**`Generated`**

from field: uint64 unit_price = 13;

#### Defined in

[src/equations_work_orders.scailo_pb.ts:561](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/equations_work_orders.scailo_pb.ts#L561)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/equations_work_orders.scailo_pb.ts:533](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/equations_work_orders.scailo_pb.ts#L533)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/equations_work_orders.scailo_pb.ts:577](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/equations_work_orders.scailo_pb.ts#L577)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/equations_work_orders.scailo_pb.ts:575](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/equations_work_orders.scailo_pb.ts#L575)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.EquationsWorkOrdersServiceItemCreateRequest"``

#### Defined in

[src/equations_work_orders.scailo_pb.ts:576](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/equations_work_orders.scailo_pb.ts#L576)

## Methods

### clone

▸ **clone**(): [`EquationsWorkOrdersServiceItemCreateRequest`](EquationsWorkOrdersServiceItemCreateRequest.md)

Create a deep copy.

#### Returns

[`EquationsWorkOrdersServiceItemCreateRequest`](EquationsWorkOrdersServiceItemCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`EquationsWorkOrdersServiceItemCreateRequest`](EquationsWorkOrdersServiceItemCreateRequest.md) \| `PlainMessage`\<[`EquationsWorkOrdersServiceItemCreateRequest`](EquationsWorkOrdersServiceItemCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`EquationsWorkOrdersServiceItemCreateRequest`](EquationsWorkOrdersServiceItemCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`EquationsWorkOrdersServiceItemCreateRequest`](EquationsWorkOrdersServiceItemCreateRequest.md)\>

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
| `a` | `undefined` \| [`EquationsWorkOrdersServiceItemCreateRequest`](EquationsWorkOrdersServiceItemCreateRequest.md) \| `PlainMessage`\<[`EquationsWorkOrdersServiceItemCreateRequest`](EquationsWorkOrdersServiceItemCreateRequest.md)\> |
| `b` | `undefined` \| [`EquationsWorkOrdersServiceItemCreateRequest`](EquationsWorkOrdersServiceItemCreateRequest.md) \| `PlainMessage`\<[`EquationsWorkOrdersServiceItemCreateRequest`](EquationsWorkOrdersServiceItemCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/equations_work_orders.scailo_pb.ts:598](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/equations_work_orders.scailo_pb.ts#L598)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`EquationsWorkOrdersServiceItemCreateRequest`](EquationsWorkOrdersServiceItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`EquationsWorkOrdersServiceItemCreateRequest`](EquationsWorkOrdersServiceItemCreateRequest.md)

#### Defined in

[src/equations_work_orders.scailo_pb.ts:586](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/equations_work_orders.scailo_pb.ts#L586)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`EquationsWorkOrdersServiceItemCreateRequest`](EquationsWorkOrdersServiceItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`EquationsWorkOrdersServiceItemCreateRequest`](EquationsWorkOrdersServiceItemCreateRequest.md)

#### Defined in

[src/equations_work_orders.scailo_pb.ts:590](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/equations_work_orders.scailo_pb.ts#L590)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`EquationsWorkOrdersServiceItemCreateRequest`](EquationsWorkOrdersServiceItemCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`EquationsWorkOrdersServiceItemCreateRequest`](EquationsWorkOrdersServiceItemCreateRequest.md)

#### Defined in

[src/equations_work_orders.scailo_pb.ts:594](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/equations_work_orders.scailo_pb.ts#L594)
