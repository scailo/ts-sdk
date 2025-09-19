[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / DebitNotesServiceItemUpdateRequest

# Class: DebitNotesServiceItemUpdateRequest

Describes the parameters required to update an item in a debit note

**`Generated`**

from message Scailo.DebitNotesServiceItemUpdateRequest

## Hierarchy

- `Message`\<[`DebitNotesServiceItemUpdateRequest`](DebitNotesServiceItemUpdateRequest.md)\>

  ↳ **`DebitNotesServiceItemUpdateRequest`**

## Table of contents

### Constructors

- [constructor](DebitNotesServiceItemUpdateRequest.md#constructor)

### Properties

- [id](DebitNotesServiceItemUpdateRequest.md#id)
- [internalQuantity](DebitNotesServiceItemUpdateRequest.md#internalquantity)
- [roundOff](DebitNotesServiceItemUpdateRequest.md#roundoff)
- [specifications](DebitNotesServiceItemUpdateRequest.md#specifications)
- [taxGroupId](DebitNotesServiceItemUpdateRequest.md#taxgroupid)
- [userComment](DebitNotesServiceItemUpdateRequest.md#usercomment)
- [vendorQuantity](DebitNotesServiceItemUpdateRequest.md#vendorquantity)
- [vendorUnitPrice](DebitNotesServiceItemUpdateRequest.md#vendorunitprice)
- [vendorUomId](DebitNotesServiceItemUpdateRequest.md#vendoruomid)
- [fields](DebitNotesServiceItemUpdateRequest.md#fields)
- [runtime](DebitNotesServiceItemUpdateRequest.md#runtime)
- [typeName](DebitNotesServiceItemUpdateRequest.md#typename)

### Methods

- [clone](DebitNotesServiceItemUpdateRequest.md#clone)
- [equals](DebitNotesServiceItemUpdateRequest.md#equals)
- [fromBinary](DebitNotesServiceItemUpdateRequest.md#frombinary)
- [fromJson](DebitNotesServiceItemUpdateRequest.md#fromjson)
- [fromJsonString](DebitNotesServiceItemUpdateRequest.md#fromjsonstring)
- [getType](DebitNotesServiceItemUpdateRequest.md#gettype)
- [toBinary](DebitNotesServiceItemUpdateRequest.md#tobinary)
- [toJSON](DebitNotesServiceItemUpdateRequest.md#tojson)
- [toJson](DebitNotesServiceItemUpdateRequest.md#tojson-1)
- [toJsonString](DebitNotesServiceItemUpdateRequest.md#tojsonstring)
- [equals](DebitNotesServiceItemUpdateRequest.md#equals-1)
- [fromBinary](DebitNotesServiceItemUpdateRequest.md#frombinary-1)
- [fromJson](DebitNotesServiceItemUpdateRequest.md#fromjson-1)
- [fromJsonString](DebitNotesServiceItemUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new DebitNotesServiceItemUpdateRequest**(`data?`): [`DebitNotesServiceItemUpdateRequest`](DebitNotesServiceItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`DebitNotesServiceItemUpdateRequest`](DebitNotesServiceItemUpdateRequest.md)\> |

#### Returns

[`DebitNotesServiceItemUpdateRequest`](DebitNotesServiceItemUpdateRequest.md)

#### Overrides

Message\&lt;DebitNotesServiceItemUpdateRequest\&gt;.constructor

#### Defined in

[src/debit_notes.scailo_pb.ts:969](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/debit_notes.scailo_pb.ts#L969)

## Properties

### id

• **id**: `bigint` = `protoInt64.zero`

The ID of the record

**`Generated`**

from field: uint64 id = 2;

#### Defined in

[src/debit_notes.scailo_pb.ts:918](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/debit_notes.scailo_pb.ts#L918)

___

### internalQuantity

• **internalQuantity**: `bigint` = `protoInt64.zero`

The quantity (in cents) being admitted in internal unit of material

**`Generated`**

from field: uint64 internal_quantity = 12;

#### Defined in

[src/debit_notes.scailo_pb.ts:925](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/debit_notes.scailo_pb.ts#L925)

___

### roundOff

• **roundOff**: `bigint` = `protoInt64.zero`

The applicable round off amount (optional, and can be positive or negative)

**`Generated`**

from field: int64 round_off = 17;

#### Defined in

[src/debit_notes.scailo_pb.ts:960](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/debit_notes.scailo_pb.ts#L960)

___

### specifications

• **specifications**: `string` = `""`

Optional specifications

**`Generated`**

from field: string specifications = 18;

#### Defined in

[src/debit_notes.scailo_pb.ts:967](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/debit_notes.scailo_pb.ts#L967)

___

### taxGroupId

• **taxGroupId**: `bigint` = `protoInt64.zero`

The ID of the associated tax group

**`Generated`**

from field: uint64 tax_group_id = 16;

#### Defined in

[src/debit_notes.scailo_pb.ts:953](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/debit_notes.scailo_pb.ts#L953)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/debit_notes.scailo_pb.ts:911](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/debit_notes.scailo_pb.ts#L911)

___

### vendorQuantity

• **vendorQuantity**: `bigint` = `protoInt64.zero`

Stores the quantity (in cents) being admitted in vendor's unit of material

**`Generated`**

from field: uint64 vendor_quantity = 14;

#### Defined in

[src/debit_notes.scailo_pb.ts:939](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/debit_notes.scailo_pb.ts#L939)

___

### vendorUnitPrice

• **vendorUnitPrice**: `bigint` = `protoInt64.zero`

The unit price of the item (as supplied by the vendor)

**`Generated`**

from field: uint64 vendor_unit_price = 15;

#### Defined in

[src/debit_notes.scailo_pb.ts:946](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/debit_notes.scailo_pb.ts#L946)

___

### vendorUomId

• **vendorUomId**: `bigint` = `protoInt64.zero`

Stores the ID of the vendor's unit of material

**`Generated`**

from field: uint64 vendor_uom_id = 13;

#### Defined in

[src/debit_notes.scailo_pb.ts:932](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/debit_notes.scailo_pb.ts#L932)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/debit_notes.scailo_pb.ts:976](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/debit_notes.scailo_pb.ts#L976)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/debit_notes.scailo_pb.ts:974](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/debit_notes.scailo_pb.ts#L974)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.DebitNotesServiceItemUpdateRequest"``

#### Defined in

[src/debit_notes.scailo_pb.ts:975](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/debit_notes.scailo_pb.ts#L975)

## Methods

### clone

▸ **clone**(): [`DebitNotesServiceItemUpdateRequest`](DebitNotesServiceItemUpdateRequest.md)

Create a deep copy.

#### Returns

[`DebitNotesServiceItemUpdateRequest`](DebitNotesServiceItemUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`DebitNotesServiceItemUpdateRequest`](DebitNotesServiceItemUpdateRequest.md) \| `PlainMessage`\<[`DebitNotesServiceItemUpdateRequest`](DebitNotesServiceItemUpdateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`DebitNotesServiceItemUpdateRequest`](DebitNotesServiceItemUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`DebitNotesServiceItemUpdateRequest`](DebitNotesServiceItemUpdateRequest.md)\>

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
| `a` | `undefined` \| [`DebitNotesServiceItemUpdateRequest`](DebitNotesServiceItemUpdateRequest.md) \| `PlainMessage`\<[`DebitNotesServiceItemUpdateRequest`](DebitNotesServiceItemUpdateRequest.md)\> |
| `b` | `undefined` \| [`DebitNotesServiceItemUpdateRequest`](DebitNotesServiceItemUpdateRequest.md) \| `PlainMessage`\<[`DebitNotesServiceItemUpdateRequest`](DebitNotesServiceItemUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/debit_notes.scailo_pb.ts:1000](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/debit_notes.scailo_pb.ts#L1000)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`DebitNotesServiceItemUpdateRequest`](DebitNotesServiceItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`DebitNotesServiceItemUpdateRequest`](DebitNotesServiceItemUpdateRequest.md)

#### Defined in

[src/debit_notes.scailo_pb.ts:988](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/debit_notes.scailo_pb.ts#L988)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`DebitNotesServiceItemUpdateRequest`](DebitNotesServiceItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`DebitNotesServiceItemUpdateRequest`](DebitNotesServiceItemUpdateRequest.md)

#### Defined in

[src/debit_notes.scailo_pb.ts:992](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/debit_notes.scailo_pb.ts#L992)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`DebitNotesServiceItemUpdateRequest`](DebitNotesServiceItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`DebitNotesServiceItemUpdateRequest`](DebitNotesServiceItemUpdateRequest.md)

#### Defined in

[src/debit_notes.scailo_pb.ts:996](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/debit_notes.scailo_pb.ts#L996)
